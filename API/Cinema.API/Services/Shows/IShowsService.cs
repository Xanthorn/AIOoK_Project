using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Contracts.Responses.Shows;
using System;
using System.Threading.Tasks;

namespace Cinema.API.Services.Shows
{
    public interface IShowsService
    {
        Task<EditShowResponse> EditShow(Guid id, EditShowRequest request);
        Task<CreateShowResponse> CreateShow(CreateShowRequest request);
        Task<GetShowsByDateResponse> GetShowsByDate(GetShowsByDateRequest request);
    }
}
