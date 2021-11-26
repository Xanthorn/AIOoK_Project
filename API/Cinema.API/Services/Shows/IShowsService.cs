using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Contracts.Responses.Shows;
using System;
using System.Threading.Tasks;

namespace Cinema.API.Services.Shows
{
    public interface IShowsService
    {
        Task<GetShowsByDayResponse> GetShowsByDay(GetShowsByDayRequest request);
        Task<EditShowResponse> EditShow(Guid id, EditShowRequest request);
    }
}
