namespace Cinema.API.Contracts.Requests.Shows
{
    public class GetShowsByDayRequest
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }
    }
}
