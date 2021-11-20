using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Cinema.DB.Models
{
    public class Show
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public Movie Movie { get; set; }
        public Auditorium Auditorium { get; set; }
        public int SoldTickets { get; set; }
        public int AvailableTickets { get; set; }
        public ICollection<Seat> IsSeatTaken { get; set; }
    }
}
