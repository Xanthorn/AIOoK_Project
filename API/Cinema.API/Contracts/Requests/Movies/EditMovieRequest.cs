using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.API.Contracts.Requests.Movies
{
    public class EditMovieRequest
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public int DurationHours { get; set; }
        public int DurationMinutes { get; set; }
    }
}
