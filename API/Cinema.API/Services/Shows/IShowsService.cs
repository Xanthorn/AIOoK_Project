using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Contracts.Responses.Shows;
using System.Threading.Tasks;

namespace Cinema.API.Services.Shows
{
    public interface IShowsService
    {
        Task<GetShowsByDateResponse> GetShowsByDate(GetShowsByDateRequest request);
    }
}
