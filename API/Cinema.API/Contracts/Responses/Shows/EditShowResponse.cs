using Cinema.API.Contracts.Responses.Common;
using System;

namespace Cinema.API.Contracts.Responses.Shows
{
    public class EditShowResponse
    {
        public Guid ShowId { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
