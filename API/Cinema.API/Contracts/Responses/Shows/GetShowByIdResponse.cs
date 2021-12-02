using Cinema.API.Contracts.Responses.Common;
using Cinema.DB.Models;

namespace Cinema.API.Contracts.Responses.Shows
{
    public class GetShowByIdResponse
    {
        public Show Show { get; set; }
        public ErrorResponse ErrorResponse { get; set; }
    }
}
