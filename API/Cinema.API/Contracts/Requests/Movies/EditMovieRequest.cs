namespace Cinema.API.Contracts.Requests.Movies
{
    public class EditMovieRequest
    {
        public string Title { get; set; }
        public int DurationHours { get; set; }
        public int DurationMinutes { get; set; }
    }
}
