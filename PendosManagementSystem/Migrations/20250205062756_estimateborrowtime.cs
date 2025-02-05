using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PendosManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class estimateborrowtime : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EstimateBorrow",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.AddColumn<DateTime>(
                name: "EstimateBorrowEnd",
                schema: "PM_Schema",
                table: "Requestors",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "EstimateBorrowStart",
                schema: "PM_Schema",
                table: "Requestors",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EstimateBorrowEnd",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropColumn(
                name: "EstimateBorrowStart",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.AddColumn<string>(
                name: "EstimateBorrow",
                schema: "PM_Schema",
                table: "Requestors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
