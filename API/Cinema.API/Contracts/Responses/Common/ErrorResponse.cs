namespace Cinema.API.Contracts.Responses.Common
{
    public class ErrorResponse
    {
        public string Message { get; set; }
        public int ErrorCode { get; set; } = -1;
    }
}
