using Cinema.API.Contracts.Responses.Common;
using System;

namespace Cinema.API.Contracts.Responses.Movies
{
    public class EditMovieResponse
    {
        public Guid MovieId { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
