using Cinema.API.Contracts.Responses.Auditoriums;
using System;
using System.Threading.Tasks;

namespace Cinema.API.Services.Auditoriums
{
    public interface IAuditoriumsService
    {
        public Task<GetAuditoriumByIdResponse> GetAuditoriumById(Guid id);

        public Task<GetAuditoriumsResponse> GetAuditoriums();
    }
}
