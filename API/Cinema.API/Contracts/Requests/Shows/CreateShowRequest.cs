using System;

namespace Cinema.API.Contracts.Requests.Shows
{
    public class CreateShowRequest
    {
        public DateTime Date { get; set; }
        public Guid MovieId { get; set; }
        public Guid AuditoriumId { get; set; }
    }
}
