using Microsoft.EntityFrameworkCore.Migrations;

namespace Cinema.DB.Migrations
{
    public partial class Addnumbertoauditorium : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Number",
                table: "Auditoriums",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Number",
                table: "Auditoriums");
        }
    }
}
