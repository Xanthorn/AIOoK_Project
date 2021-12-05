using Cinema.API.Contracts;
using Cinema.API.Contracts.Requests.Movies;
using Cinema.API.Services.Movies;
using Cinema.DB;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Cinema.API.Controllers
{
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IMoviesService _moviesService;

        public MovieController(DataContext dataContext)
        {
            _dataContext = dataContext;
            _moviesService = new MoviesService(_dataContext);
        }

        [HttpPost(ApiRoutes.Movies.Create)]
        public async Task<IActionResult> CreateMovie([FromBody] CreateMovieRequest request)
        {
            var result = await _moviesService.CreateMovie(request);

            if (result.ErrorResponse == null)
            {
                return Ok(result.MovieId);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpPut(ApiRoutes.Movies.Edit)]
        public async Task<IActionResult> EditMovie([FromRoute] Guid id, [FromBody] EditMovieRequest request)
        {
            var result = await _moviesService.EditMovie(id, request);

            if (result.ErrorResponse == null)
            {
                return Ok(result.MovieId);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpDelete(ApiRoutes.Movies.Delete)]
        public async Task<IActionResult> DeleteMovie([FromRoute] Guid id)
        {
            var result = await _moviesService.DeleteMovie(id);

            if (result.ErrorResponse == null)
            {
                return Ok(result.IsDeleted);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Movies.GetMovieById)]
        public async Task<IActionResult> GetMovieById([FromRoute] Guid id)
        {
            var result = await _moviesService.GetMovieById(id);

            if (result.ErrorResponse == null)
            {
                return Ok(result.Movie);
            }
            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Movies.GetMovies)]
        public async Task<IActionResult> GetMovies()
        {
            var result = await _moviesService.GetMovies();

            if (result.ErrorResponse == null)
            {
                return Ok(result.Movies);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }

        [HttpGet(ApiRoutes.Movies.GetPopularityOfMovieByDate)]
        public async Task<IActionResult> GetPopularityOfMovieByDate([FromRoute] Guid id, [FromRoute] int year, [FromRoute] int month, [FromRoute] int day)
        {
            GetPopularityOfMovieByDateRequest request = new()
            {
                Id = id,
                Date = new DateTime(year, month, day)
            };

            var result = await _moviesService.GetPopularityOfMovieByDate(request);

            if (result.ErrorResponse == null)
            {
                return Ok(result);
            }

            else
            {
                return StatusCode(result.ErrorResponse.ErrorCode, result.ErrorResponse.Message);
            }
        }
    }
}
