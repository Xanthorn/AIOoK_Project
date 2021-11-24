namespace Cinema.API.Contracts.Requests.Movies
{
    public class CreateMovieRequest
    {
        public string Title { get; set; }
        public int DurationHours { get; set; }
        public int DurationMinutes { get; set; }
    }
}
