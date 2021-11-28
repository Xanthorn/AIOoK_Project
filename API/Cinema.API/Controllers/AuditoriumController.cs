using Cinema.API.Contracts;
using Cinema.API.Services.Auditoriums;
using Cinema.DB;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Cinema.API.Controllers
{
    [ApiController]
    public class AuditoriumController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IAuditoriumsService _auditoriumsService;

        public AuditoriumController(DataContext dataContext)
        {
            _dataContext = dataContext;
            _auditoriumsService = new AuditoriumsService(_dataContext);
        }

        [HttpGet(ApiRoutes.Auditoriums.GetAuditoriumById)]
        public async Task<IActionResult> GetAuditoriumById([FromRoute] Guid id)
        {
            var result = await _auditoriumsService.GetAuditoriumById(id);

            if (result.ErrorResponse == null)
            {
                return Ok(result.Auditorium);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Auditoriums.GetAuditoriums)]
        public async Task<IActionResult> GetAuditoriums()
        {
            var result = await _auditoriumsService.GetAuditoriums();

            if (result.ErrorResponse == null)
            {
                return Ok(result.Auditoriums);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }
    }
}
