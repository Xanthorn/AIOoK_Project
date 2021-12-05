using System;
using System.Text.Json.Serialization;

namespace Cinema.API.Contracts.Requests.Movies
{
    public class GetPopularityOfMovieByDateRequest
    {
        [JsonIgnore]
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
    }
}
