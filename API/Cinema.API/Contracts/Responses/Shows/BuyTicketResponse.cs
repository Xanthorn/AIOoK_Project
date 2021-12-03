using Cinema.API.Contracts.Responses.Common;
using System;
using System.Collections.Generic;

namespace Cinema.API.Contracts.Responses.Shows
{
    public class BuyTicketResponse
    {
        public List<Guid> SeatsId { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
