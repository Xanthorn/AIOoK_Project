using System;
using System.ComponentModel.DataAnnotations;

namespace Cinema.DB.Models
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public int DurationHours { get; set; }
        public int DurationMinutes { get; set; }
    }
}
