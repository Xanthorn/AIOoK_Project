namespace Cinema.API.Contracts.Responses.Movies
{
    public class DeleteMovieResponse
    {
        public string Message { get; set; }
        public int ErrorCode { get; set; } = -1;
    }
}
