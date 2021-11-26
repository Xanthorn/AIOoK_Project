using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Contracts.Responses.Shows;
using Cinema.DB;
using Cinema.DB.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cinema.API.Services.Shows
{
    public class ShowsService : IShowsService
    {
        private readonly DataContext _dataContext;

        public ShowsService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<GetShowsByDateResponse> GetShowsByDate(GetShowsByDateRequest request)
        {
            List<Show> shows = await _dataContext.Shows.Where(s => (s.Date.Year == request.Year && s.Date.Month == request.Month && s.Date.Day == request.Day)).ToListAsync();

            GetShowsByDateResponse response = new();

            if(shows.Count == 0)
            {
                response.ErrorCode = 404;
            }

            else
            {
                response.Shows = shows;
            }

            return response;
        }
    }
}
