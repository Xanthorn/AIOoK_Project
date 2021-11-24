using Cinema.DB.Models;
using System.Collections.Generic;

namespace Cinema.API.Contracts.Responses.Shows
{
    public class GetShowsByDayResponse
    {
        public List<Show> Shows { get; set; }
        public int ErrorCode { get; set; } = -1;
    }
}
