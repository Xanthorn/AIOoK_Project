using Cinema.API.Contracts.Requests.Movies;
using Cinema.API.Contracts.Responses.Movies;
using System;
using System.Threading.Tasks;

namespace Cinema.API.Services.Movies
{
    public interface IMoviesService
    {
        public Task<CreateMovieResponse> CreateMovie(CreateMovieRequest request);
        public Task<EditMovieResponse> EditMovie(Guid id, EditMovieRequest request);
        public Task<DeleteMovieResponse> DeleteMovie(Guid id);
        public Task<GetMovieByIdResponse> GetMovieById(Guid id);
        public Task<GetMoviesResponse> GetMovies();
    }
}
