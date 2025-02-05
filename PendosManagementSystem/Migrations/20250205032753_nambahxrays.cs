using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PendosManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class nambahxrays : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "XrayRooms",
                schema: "PM_Schema",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BuildingId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_XrayRooms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_XrayRooms_IFXBuilding_BuildingId",
                        column: x => x.BuildingId,
                        principalSchema: "PM_Schema",
                        principalTable: "IFXBuilding",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_XrayRooms_BuildingId",
                schema: "PM_Schema",
                table: "XrayRooms",
                column: "BuildingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "XrayRooms",
                schema: "PM_Schema");
        }
    }
}
