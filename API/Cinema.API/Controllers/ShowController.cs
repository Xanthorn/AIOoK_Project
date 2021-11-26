using Cinema.API.Contracts;
using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Contracts.Responses.Shows;
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

        [HttpPost(ApiRoutes.Shows.Create)]
        public async Task<IActionResult> CreateShow([FromBody] CreateShowRequest request)
        {
            CreateShowResponse result = await _showsService.CreateShow(request);

            if (result.ErrorResponse == null)
            {
                return Ok(result.ShowId);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Shows.GetShowByDate)]
        public async Task<IActionResult> GetShowsByDate([FromRoute] int year, [FromRoute] int month, [FromRoute] int day)
        {
            GetShowsByDateRequest request = new()
            {
                Year = year,
                Month = month,
                Day = day
            };

            var result = await _showsService.GetShowsByDate(request);

            if (result.ErrorResponse == null)
            {
                return Ok(result.Shows);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }
    }
}
