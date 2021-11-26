﻿using Cinema.API.Contracts;
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
        public async Task<IActionResult> AddMovie([FromBody] CreateMovieRequest request)
        {
            var result = await _moviesService.AddMovie(request);

            if (result.ErrorCode == -1)
            {
                return Ok(result.Message);
            }

            else
            {
                return StatusCode(result.ErrorCode, result.Message);
            }
        }

        [HttpPut(ApiRoutes.Movies.Edit)]
        public async Task<IActionResult> EditMovie([FromRoute] Guid id, [FromBody] EditMovieRequest request)
        {
            var result = await _moviesService.EditMovie(id, request);

            if (result.ErrorCode == -1)
            {
                return Ok(result.Message);
            }

            else
            {
                return StatusCode(result.ErrorCode, result.Message);
            }
        }

        [HttpDelete(ApiRoutes.Movies.Delete)]
        public async Task<IActionResult> DeleteMovie([FromRoute] Guid id)
        {
            var result = await _moviesService.DeleteMovie(id);

            if (result.ErrorCode == -1)
            {
                return Ok(result.Message);
            }

            else
            {
                return StatusCode(result.ErrorCode, result.Message);
            }
        }
    }
}
