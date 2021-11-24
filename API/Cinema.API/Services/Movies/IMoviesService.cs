using Cinema.API.Contracts.Requests.Movies;
using Cinema.API.Contracts.Responses.Movies;
using System.Threading.Tasks;

namespace Cinema.API.Services.Movies
{
    public interface IMoviesService
    {
        public Task<CreateMovieResponse> AddMovie(CreateMovieRequest request);
        public Task<EditMovieResponse> EditMovie(EditMovieRequest request);
    }
}
