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

        public async Task<CreateMovieResponse> AddMovie(CreateMovieRequest request)
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

            if(result > 0)
            {
                response.Message = "Movie added succesfully";
            }

            else
            {
                response.Message = "Internal server error";
                response.ErrorCode = 500;
            }

            return response;
        }
        public async Task<EditMovieResponse> EditMovie(Guid id, EditMovieRequest request)
        {
            var movieToEdit = await _dataContext.Movies.FindAsync(id);

            movieToEdit.Title = request.Title;
            movieToEdit.DurationHours = request.DurationHours;
            movieToEdit.DurationMinutes = request.DurationMinutes;

            _dataContext.Movies.Update(movieToEdit);

            int result = await _dataContext.SaveChangesAsync();

            EditMovieResponse response = new();

            if (result > 0)
            {
                response.Message = "Movie edited succesfully";
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
