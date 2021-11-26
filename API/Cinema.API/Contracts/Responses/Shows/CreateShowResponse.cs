using System;

namespace Cinema.API.Contracts.Responses.Shows
{
    public class CreateShowResponse
    {
        public Guid ShowId { get; set; }
        public string Message { get; set; }
        public int ErrorCode { get; set; } = -1;
    }
}
