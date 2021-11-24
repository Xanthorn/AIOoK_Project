using Cinema.API.Contracts;
using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Services.Shows;
using Cinema.DB;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Cinema.API.Controllers
{
    [ApiController]
    public class ShowController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IShowsService _showsService;

        public ShowController(DataContext dataContext)
        {
            _dataContext = dataContext;
            _showsService = new ShowsService(_dataContext);
        }

        [HttpGet(ApiRoutes.Shows.GetShowByDay)]
        public async Task<IActionResult> GetShowsByDay([FromRoute] int year, [FromRoute] int month, [FromRoute] int day)
        {
            GetShowsByDayRequest request = new()
            {
                Year = year,
                Month = month,
                Day = day
            };

            var result = await _showsService.GetShowsByDay(request);

            if (result.ErrorCode == -1)
            {
                return Ok(result.Shows);
            }

            else
            {
                return StatusCode(result.ErrorCode);
            }
        }
    }
}
