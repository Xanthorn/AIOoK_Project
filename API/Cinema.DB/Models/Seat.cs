using System;
using System.ComponentModel.DataAnnotations;

namespace Cinema.DB.Models
{
    public class Seat
    {
        public Guid Id { get; set; }
        public bool IsTaken { get; set; } = false;
    }
}
