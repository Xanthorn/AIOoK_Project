namespace Cinema.API.Contracts.Requests.Shows
{
    public class GetShowsByDateRequest
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }
    }
}
