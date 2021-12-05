using Cinema.API.Contracts.Responses.Common;

namespace Cinema.API.Contracts.Responses.Movies
{
    public class GetPopularityOfMovieByDateResponse
    {
        public int NumberOfShows { get; set; } = 0;
        public int SumOfTickets { get; set; } = 0;
        public int AvailableTickets { get; set; } = 0;
        public int SoldTickets { get; set; } = 0;
        public ErrorResponse ErrorResponse { get; set; }
    }
}
