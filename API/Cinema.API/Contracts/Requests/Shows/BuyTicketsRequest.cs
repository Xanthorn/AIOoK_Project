using System;
using System.Collections.Generic;

namespace Cinema.API.Contracts.Requests.Shows
{
    public class BuyTicketsRequest
    {
        public Guid ShowId { get; set; }
        public List<Guid> SeatsId { get; set; }
    }
}
