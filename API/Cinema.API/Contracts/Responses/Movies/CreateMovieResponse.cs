namespace Cinema.API.Contracts.Responses.Movies
{
    public class CreateMovieResponse
    {
        public string Message { get; set; }
        public int ErrorCode { get; set; } = -1;
    }
}
