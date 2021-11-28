using Cinema.API.Contracts.Responses.Auditoriums;
using Cinema.DB;
using Cinema.DB.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cinema.API.Services.Auditoriums
{
    public class AuditoriumsService : IAuditoriumsService
    {
        private readonly DataContext _dataContext;

        public AuditoriumsService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<GetAuditoriumByIdResponse> GetAuditoriumById(Guid id)
        {
            Auditorium auditoriumMovie = await _dataContext.Auditoriums.FindAsync(id);

            GetAuditoriumByIdResponse response = new();

            if (auditoriumMovie == null)
            {
                response.ErrorResponse = new()
                {
                    Message = "There is no auditorium with given Id",
                    ErrorCode = 404
                };
            }
            else
            {
                response.Auditorium = auditoriumMovie;
            }

            return response;
        }

        public async Task<GetAuditoriumsResponse> GetAuditoriums()
        {
            List<Auditorium> auditoriums = await _dataContext.Auditoriums.ToListAsync();

            GetAuditoriumsResponse response = new();

            if (auditoriums.Count == 0)
            {
                response.ErrorResponse = new()
                {
                    Message = "There are no auditoriums",
                    ErrorCode = 404
                };
            }

            else
            {
                response.Auditoriums = auditoriums;
            }

            return response;
        }
    }
}
