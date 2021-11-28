using Cinema.API.Contracts.Requests.Movies;
using Cinema.API.Contracts.Responses.Movies;
using Cinema.DB;
using Cinema.DB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.API.Services.Movies
{
    public class MoviesService : IMoviesService
    {
        private readonly DataContext _dataContext;

        public MoviesService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<CreateMovieResponse> CreateMovie(CreateMovieRequest request)
        {
            Movie newMovie = new()
            {
                Id = Guid.NewGuid(),
                Title = request.Title,
                DurationHours = request.DurationHours,
                DurationMinutes = request.DurationMinutes
            };

            await _dataContext.Movies.AddAsync(newMovie);
            int result = await _dataContext.SaveChangesAsync();

            CreateMovieResponse response = new();

            if (result > 0)
            {
                response.MovieId = newMovie.Id;
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
        public async Task<EditMovieResponse> EditMovie(Guid id, EditMovieRequest request)
        {
            Movie existingMovie = await _dataContext.Movies.FindAsync(id);

            EditMovieResponse response = new();

            if (existingMovie == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no movie with given Id",
                    ErrorCode = 404
                };
            }
            else
            {
                existingMovie.Title = request.Title;
                existingMovie.DurationHours = request.DurationHours;
                existingMovie.DurationMinutes = request.DurationMinutes;

                int result = await _dataContext.SaveChangesAsync();

                if (result > 0)
                {
                    response.MovieId = existingMovie.Id;
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

        public async Task<DeleteMovieResponse> DeleteMovie(Guid id)
        {
            Movie existingMovie = await _dataContext.Movies.FindAsync(id);

            DeleteMovieResponse response = new();

            if (existingMovie == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no movie with given Id",
                    ErrorCode = 404
                };
            }
            else
            {
                List<Show> showsUsingMovie = _dataContext.Shows.Where(s => s.Movie == existingMovie).ToList();

                if (showsUsingMovie.Count > 0)
                {
                    response.ErrorResponse = new()
                    {
                        Message = "This movie is being used by one of the shows",
                        ErrorCode = 405
                    };

                    return response;
                }

                _dataContext.Movies.Remove(existingMovie);

                int result = await _dataContext.SaveChangesAsync();

                if (result > 0)
                {
                    response.IsDeleted = true;
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

        public async Task<GetMoviesResponse> GetMovies()
        {
            List<Movie> movies = await _dataContext.Movies.ToListAsync();

            GetMoviesResponse response = new();

            if (movies.Count == 0)
            {
                response.ErrorResponse = new()
                {
                    Message = "There are no movies",
                    ErrorCode = 404
                };
            }

            else
            {
                response.Movies = movies;
            }

            return response;
        }
    }
}
