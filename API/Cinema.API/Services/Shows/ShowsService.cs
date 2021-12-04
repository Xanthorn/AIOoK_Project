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
                                .Include(s => s.Movie)
                                .Include(s => s.Auditorium)
                                .Include(s => s.Seats)
                                .Where(s => s.Date.Year == request.Year)
                                .Where(s => s.Date.Month == request.Month)
                                .Where(s => s.Date.Day == request.Day)
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
            EditShowResponse response = new();

            Show existingShow = await _dataContext.Shows
                .Include(s => s.Movie)
                .Include(s => s.Auditorium)
                .Include(s => s.Seats)
                .Where(s => s.Id == id)
                .FirstOrDefaultAsync();

            if (existingShow == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no show with given Id",
                    ErrorCode = 404
                };

                return response;
            }

            Movie existingMovie = await _dataContext.Movies.FindAsync(request.MovieId);

            if (existingMovie == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no movie with given Id",
                    ErrorCode = 404
                };

                return response;
            }

            Auditorium existingAuditorium = await _dataContext.Auditoriums.FindAsync(request.AuditoriumId);

            if (existingAuditorium == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no auditorium with given Id",
                    ErrorCode = 404
                };

                return response;
            }

            if (existingShow.SoldTickets == 0)
            {
                existingShow.Date = DateTime.Parse(request.Date);
                existingShow.Movie = existingMovie;
                existingShow.Auditorium = existingAuditorium;

                if (existingShow.Seats.Count > existingAuditorium.Capacity)
                {
                    int seatsToDelete = existingShow.Seats.Count - existingAuditorium.Capacity;

                    for (int i = 0; i < seatsToDelete; i++)
                    {
                        Seat seatToDelete = existingShow.Seats.FirstOrDefault();
                        existingShow.Seats.Remove(seatToDelete);
                        _dataContext.Seats.Remove(seatToDelete);
                    }

                    existingShow.AvailableTickets -= seatsToDelete;
                }

                else if (existingShow.Seats.Count < existingAuditorium.Capacity)
                {
                    int seatsToCreate = existingAuditorium.Capacity - existingShow.Seats.Count;

                    for (int i = 0; i < seatsToCreate; i++)
                    {
                        Seat seat = new()
                        {
                            Id = Guid.NewGuid()
                        };

                        await _dataContext.Seats.AddAsync(seat);
                        existingShow.Seats.Add(seat);
                    }

                    existingShow.AvailableTickets += seatsToCreate;
                }
            }

            else
            {
                response.ErrorResponse = new()
                {
                    Message = "Show can not be changed when someone bought a ticket",
                    ErrorCode = 405
                };

                return response;
            }

            int result = await _dataContext.SaveChangesAsync();

            if (result > 0)
            {
                response.ShowId = existingShow.Id;
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

        public async Task<GetShowsResponse> GetShows()
        {
            List<Show> shows = await _dataContext.Shows
                                        .Include(s => s.Movie)
                                        .Include(s => s.Auditorium)
                                        .ToListAsync();

            GetShowsResponse response = new();

            if (shows.Count > 0)
            {
                response.Shows = shows;
            }

            else
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no any show in database",
                    ErrorCode = 404
                };
            }

            return response;
        }

        public async Task<DeleteShowResponse> DeleteShow(Guid id)
        {
            Show existingShow = await _dataContext.Shows
                                        .Include(s => s.Seats)
                                        .Where(s => s.Id == id)
                                        .FirstOrDefaultAsync();

            DeleteShowResponse response = new();

            if (existingShow == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no show with given Id",
                    ErrorCode = 404
                };
            }

            else
            {
                for (int i = 0; i < existingShow.AvailableTickets; i++)
                {
                    Seat seatToDelete = existingShow.Seats.FirstOrDefault();
                    existingShow.Seats.Remove(seatToDelete);
                    _dataContext.Seats.Remove(seatToDelete);
                }

                _dataContext.Shows.Remove(existingShow);

                int result = await _dataContext.SaveChangesAsync();

                if (result > 0)
                {
                    response.ShowId = existingShow.Id;
                }

                else
                {
                    response.ErrorResponse = new()
                    {
                        Message = "Internal server error",
                        ErrorCode = 500
                    };
                }
            }

            return response;
        }

        public async Task<GetShowByIdResponse> GetShowById(Guid id)
        {
            Show existingShow = await _dataContext.Shows
                                    .Include(s => s.Auditorium)
                                    .Include(s => s.Movie)
                                    .Where(s => s.Id == id)
                                    .FirstOrDefaultAsync();

            GetShowByIdResponse response = new();

            if (existingShow == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no show with given Id",
                    ErrorCode = 404
                };
            }

            else
            {
                response.Show = existingShow;
            }

            return response;
        }

        public async Task<GetCurrentShowsResponse> GetCurrentShows()
        {
            List<Show> shows = await _dataContext.Shows
                                       .Include(s => s.Movie)
                                       .Include(s => s.Auditorium)
                                       .Include(s => s.Seats)
                                       .Where(s => s.Date.Date == DateTime.Today)
                                       .Where(s => s.Date.AddHours((Convert.ToDouble(s.Movie.DurationHours) + Convert.ToDouble(s.Movie.DurationMinutes)/60)) >= DateTime.Now)
                                       .Where(s => s.Date <= DateTime.Now)
                                       .ToListAsync();

            GetCurrentShowsResponse response = new();

            if (shows.Count > 0)
            {
                response.Shows = shows;
            }

            else
            {
                response.ErrorResponse = new()
                {
                    Message = "No movie is playing now.",
                    ErrorCode = 404
                };
            }

            return response;
        }

        public async Task<BuyTicketsResponse> BuyTicket(Guid id, BuyTicketsRequest request)
        {
            Show existingShow = await _dataContext.Shows
                                   .Include(s => s.Auditorium)
                                   .Include(s => s.Movie)
                                   .Include(s => s.Seats)
                                   .Where(s => s.Id == id)
                                   .FirstOrDefaultAsync();
            
            BuyTicketsResponse response = new();

            if (existingShow == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no show with given Id",
                    ErrorCode = 404
                };
            }
            else
            {
                int correctSeats = 0;

                for (int i = 0; i < request.SeatsId.Count; i++)
                {
                    Seat existingSeat = await _dataContext.Seats.FindAsync(request.SeatsId[i]);

                    if(existingSeat == null)
                    {
                        response.ErrorResponse = new()
                        {
                            Message = "There is no seat with given Id",
                            ErrorCode = 404
                        };

                        return response;
                    }
                    if (!existingShow.Seats.Contains(existingSeat))
                    {
                        response.ErrorResponse = new()
                        {
                            Message = "This seat is not in this show",
                            ErrorCode = 404
                        };

                        return response;
                    }
                    else if (existingSeat.IsTaken == true)
                    {
                        response.ErrorResponse = new()
                        {
                            Message = "The choosen seat is already taken",
                            ErrorCode = 404
                        };

                        return response;
                    }
                    else
                    {
                        existingSeat.IsTaken = true;
                        existingShow.AvailableTickets--;
                        existingShow.SoldTickets++;
                        correctSeats++;
                    }
                }
                if (correctSeats == request.SeatsId.Count)
                {
                    int result = await _dataContext.SaveChangesAsync();

                    if (result > 0)
                    {
                        response.SeatsId = request.SeatsId;
                    }

                    else
                    {
                        response.ErrorResponse = new()
                        {
                            Message = "Internal server error",
                            ErrorCode = 500
                        };
                    }
                }
            }
            return response;
        }
    }
}
