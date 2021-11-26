using System;

namespace Cinema.API.Contracts.Requests.Shows
{
    public class EditShowRequest
    {
        public string Date { get; set; }
        public Guid MovieId { get; set; }
        public Guid AuditoriumId { get; set; }
    }
}
