using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Contracts.Responses.Shows;
using Cinema.DB;
using Cinema.DB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.API.Services.Shows
{
    public class ShowsService : IShowsService
    {
        private readonly DataContext _dataContext;

        public ShowsService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<CreateShowResponse> CreateShow(CreateShowRequest request)
        {
            CreateShowResponse response = new();

            Auditorium auditorium = await _dataContext.Auditoriums.FindAsync(request.AuditoriumId);

            if (auditorium == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no auditorium with given Id",
                    ErrorCode = 404
                };

                return response;
            }

            Movie movie = await _dataContext.Movies.FindAsync(request.MovieId);

            if (movie == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no movie with given Id",
                    ErrorCode = 404,
                };

                return response;
            }

            Show show = new()
            {
                Id = Guid.NewGuid(),
                Auditorium = auditorium,
                Movie = movie,
                Date = request.Date,
                AvailableTickets = auditorium.Capacity,
                SoldTickets = 0,
                Seats = new List<Seat>()
            };

            for (int i = 0; i < auditorium.Capacity; i++)
            {
                Seat seat = new()
                {
                    Id = Guid.NewGuid(),
                    IsTaken = false,
                };

                show.Seats.Add(seat);
            }

            await _dataContext.Shows.AddAsync(show);
            int result = await _dataContext.SaveChangesAsync();

            if (result > 0)
            {
                response.ShowId = show.Id;
            }

            else
            {
                response.ErrorResponse = new()
                {
                    Message = "Internal server error",
                    ErrorCode = 500
                };
            }

            return response;
        }

        public async Task<GetShowsByDateResponse> GetShowsByDate(GetShowsByDateRequest request)
        {
            List<Show> shows = await _dataContext.Shows
                                .Include(s => s.Auditorium)
                                .Include(s => s.Movie)
                                .Include(s => s.Seats)
                                .Where(s => (s.Date.Year == request.Year && s.Date.Month == request.Month && s.Date.Day == request.Day))
                                .ToListAsync();

            GetShowsByDateResponse response = new();

            if (shows.Count == 0)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no shows at given date",
                    ErrorCode = 404
                };
            }

            else
            {
                response.Shows = shows;
            }

            return response;
        }

        public async Task<EditShowResponse> EditShow(Guid id, EditShowRequest request)
        {
            Show existingShow = await _dataContext.Shows
                .Include(s => s.Movie)
                .Include(s => s.Auditorium)
                .Include(s => s.Seats)
                .Where(s => s.Id == id)
                .FirstOrDefaultAsync();

            Movie existingMovie = await _dataContext.Movies.FindAsync(request.MovieId);

            Auditorium existingAuditorium = await _dataContext.Auditoriums.FindAsync(request.AuditoriumId);

            EditShowResponse response = new();

            if (existingShow == null)
            {
                response.Message = "There is no show with given Id";
                response.ErrorCode = 404;
            }
            else if (existingMovie == null)
            {
                response.Message = "There is no movie with given Id";
                response.ErrorCode = 404;
            }
            else if (existingAuditorium == null)
            {
                response.Message = "There is no auditorium with given Id";
                response.ErrorCode = 404;
            }
            else if (existingShow.Auditorium.Equals(existingAuditorium))
            {
                existingShow.Date = DateTime.Parse(request.Date);
                existingShow.Movie = existingMovie;
            }
            else if (!existingShow.Auditorium.Equals(existingAuditorium) && existingShow.SoldTickets == 0)
            {
                existingShow.Date = DateTime.Parse(request.Date);
                existingShow.Movie = existingMovie;
                existingShow.Auditorium = existingAuditorium;

                existingShow.Seats = new List<Seat>();

                for (int i = 0; i < existingShow.Auditorium.Capacity; i++)
                {
                    Seat seat = new()
                    {
                        Id = Guid.NewGuid(),
                        IsTaken = false,
                    };

                    existingShow.Seats.Add(seat);
                }
            }
            else if (!existingShow.Auditorium.Equals(existingAuditorium) && existingShow.SoldTickets != 0)
            {
                response.Message = "Auditorium can not be changed when someone buy a ticket";
                response.ErrorCode = 304;
            }

            int result = await _dataContext.SaveChangesAsync();

            if (result > 0)
            {
                response.Message = "Show has been edited succesfully";
            }
            else if(response.Message == null)
            {
                response.Message = "Internal server error";
                response.ErrorCode = 500;
            }

            return response;

        }
    }
}
