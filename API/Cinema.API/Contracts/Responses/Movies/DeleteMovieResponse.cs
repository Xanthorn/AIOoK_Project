using Cinema.API.Contracts.Responses.Common;

namespace Cinema.API.Contracts.Responses.Movies
{
    public class DeleteMovieResponse
    {
        public bool IsDeleted { get; set; } = false;
        public ErrorResponse ErrorResponse { get; set; }
    }
}
