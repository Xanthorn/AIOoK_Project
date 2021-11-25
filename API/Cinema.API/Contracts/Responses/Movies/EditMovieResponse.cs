using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.API.Contracts.Responses.Movies
{
    public class EditMovieResponse
    {
        public string Message { get; set; }
        public int ErrorCode { get; set; } = -1;
    }
}
