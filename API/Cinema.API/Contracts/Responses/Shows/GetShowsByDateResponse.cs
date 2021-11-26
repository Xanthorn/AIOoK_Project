using Cinema.API.Contracts.Responses.Common;
using Cinema.DB.Models;
using System.Collections.Generic;

namespace Cinema.API.Contracts.Responses.Shows
{
    public class GetShowsByDateResponse
    {
        public List<Show> Shows { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
