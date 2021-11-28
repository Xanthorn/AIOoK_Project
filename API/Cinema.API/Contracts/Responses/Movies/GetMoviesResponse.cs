using Cinema.API.Contracts.Responses.Common;
using Cinema.DB.Models;
using System.Collections.Generic;

namespace Cinema.API.Contracts.Responses.Movies
{
    public class GetMoviesResponse
    {
        public List<Movie> Movies { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
