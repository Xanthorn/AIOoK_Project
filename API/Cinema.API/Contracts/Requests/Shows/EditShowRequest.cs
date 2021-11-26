using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.API.Contracts.Requests.Shows
{
    public class EditShowRequest
    {
        public string Date { get; set; }
        public Guid MovieId { get; set; }
        public Guid AuditoriumId { get; set; }
    }
}
