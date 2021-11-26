using Cinema.DB.Models;
using Microsoft.EntityFrameworkCore;

namespace Cinema.DB
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Auditorium> Auditoriums { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Show> Shows { get; set; }
        public DbSet<Seat> Seats { get; set; }
    }
}
