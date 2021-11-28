using System;
using System.ComponentModel.DataAnnotations;

namespace Cinema.DB.Models
{
    public class Auditorium
    {
        public Guid Id { get; set; }
        public int Number { get; set; }
        public int Rows { get; set; }
        public int SeatsInRow { get; set; }
        public int Capacity { get; set; }
    }
}
