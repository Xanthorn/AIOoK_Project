using System;
using System.Collections.Generic;

namespace Cinema.API.Contracts.Requests.Shows
{
    public class BuyTicketsRequest
    {
        public List<Guid> SeatsId { get; set; }
    }
}
