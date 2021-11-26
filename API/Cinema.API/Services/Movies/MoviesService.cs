using Cinema.API.Contracts.Requests.Movies;
using Cinema.API.Contracts.Responses.Movies;
using Cinema.DB;
using Cinema.DB.Models;
using System;
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
                response.Message = "There is no movie with given Id";
                response.ErrorCode = 404;
            }
            else
            {
                existingMovie.Title = request.Title;
                existingMovie.DurationHours = request.DurationHours;
                existingMovie.DurationMinutes = request.DurationMinutes;

                int result = await _dataContext.SaveChangesAsync();

                if (result > 0)
                {
                    response.Message = "Movie has been edited succesfully";
                }

                else
                {
                    response.Message = "Internal server error";
                    response.ErrorCode = 500;
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
                response.Message = "There is no movie with given Id";
                response.ErrorCode = 404;
            }
            else
            {
                _dataContext.Remove(existingMovie);

                int result = await _dataContext.SaveChangesAsync();

                if (result > 0)
                {
                    response.Message = "Movie has been deleted succesfully";
                }

                else
                {
                    response.Message = "Internal server error";
                    response.ErrorCode = 500;
                }
            }
            return response;
        }
    }
}
