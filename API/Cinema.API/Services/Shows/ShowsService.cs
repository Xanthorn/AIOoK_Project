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

        public async Task<GetShowsByDayResponse> GetShowsByDay(GetShowsByDayRequest request)
        {
            List<Show> shows = await _dataContext.Shows.Where(s => (s.Date.Year == request.Year && s.Date.Month == request.Month && s.Date.Day == request.Day)).ToListAsync();

            GetShowsByDayResponse response = new();

            if (shows.Count == 0)
            {
                response.ErrorCode = 404;
            }

            else
            {
                response.Shows = shows;
            }

            return response;
        }

        public async Task<EditShowResponse> EditShow(Guid id, EditShowRequest request)
        {
            Show existingShow = await _dataContext.Shows.FindAsync(id);

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

                existingShow.IsSeatTaken = new List<Seat>();

                for (int i = 0; i < existingShow.Auditorium.Capacity; i++)
                {
                    Seat seat = new()
                    {
                        Id = Guid.NewGuid(),
                        IsTaken = false,
                    };

                    existingShow.IsSeatTaken.Add(seat);
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
            else
            {
                response.Message = "Internal server error";
                response.ErrorCode = 500;
            }

            return response;

        }
    }
}
