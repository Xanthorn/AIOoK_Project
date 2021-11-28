using Cinema.API.Contracts.Responses.Common;
using Cinema.DB.Models;

namespace Cinema.API.Contracts.Responses.Auditoriums
{
    public class GetAuditoriumByIdResponse
    {
        public Auditorium Auditorium { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
