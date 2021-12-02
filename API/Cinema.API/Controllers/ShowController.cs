using Cinema.API.Contracts;
using Cinema.API.Contracts.Requests.Shows;
using Cinema.API.Contracts.Responses.Shows;
using Cinema.API.Services.Shows;
using Cinema.DB;
using Microsoft.AspNetCore.Mvc;
using System;
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

        [HttpGet(ApiRoutes.Shows.GetByDate)]
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

        [HttpPatch(ApiRoutes.Shows.Edit)]
        public async Task<IActionResult> EditShow([FromRoute] Guid id, [FromBody] EditShowRequest request)
        {
            var result = await _showsService.EditShow(id, request);

            if (result.ErrorResponse == null)
            {
                return Ok(result.ShowId);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Shows.GetAll)]
        public async Task<IActionResult> GetShows()
        {
            GetShowsResponse response = await _showsService.GetShows();

            if (response.ErrorResponse == null)
            {
                return Ok(response.Shows);
            }

            else
            {
                return StatusCode(response.ErrorResponse.ErrorCode, response.ErrorResponse.Message);
            }
        }

        [HttpDelete(ApiRoutes.Shows.Delete)]
        public async Task<IActionResult> DeleteShow([FromRoute] Guid id)
        {
            DeleteShowResponse response = await _showsService.DeleteShow(id);

            if (response.ErrorResponse == null)
            {
                return Ok(response.ShowId);
            }

            else
            {
                return StatusCode(response.ErrorResponse.ErrorCode, response.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Shows.GetById)]
        public async Task<IActionResult> GetShowById([FromRoute] Guid id)
        {
            GetShowByIdResponse response = await _showsService.GetShowById(id);

            if (response.ErrorResponse == null)
            {
                return Ok(response.Show);
            }

            else
            {
                return StatusCode(response.ErrorResponse.ErrorCode, response.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Shows.GetCurrentShows)]
        public async Task<IActionResult> GetCurrentShows()
        {
            GetCurrentShowsResponse response = await _showsService.GetCurrentShows();

            if (response.ErrorResponse == null)
            {
                return Ok(response.Shows);
            }

            else
            {
                return StatusCode(response.ErrorResponse.ErrorCode, response.ErrorResponse.Message);
            }
        }
    }
}
