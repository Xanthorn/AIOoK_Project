using Cinema.API.Contracts.Responses.Common;
using Cinema.DB.Models;
using System.Collections.Generic;

namespace Cinema.API.Contracts.Responses.Auditoriums
{
    public class GetAuditoriumsResponse
    {
        public List<Auditorium> Auditoriums { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
