using Cinema.API.Contracts.Responses.Common;
using Cinema.DB.Models;

namespace Cinema.API.Contracts.Responses.Movies
{
    public class GetMovieByIdResponse
    {
        public Movie Movie { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
