using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PendosManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class requestor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Requestors",
                schema: "PM_Schema",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Department = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BadgeUser = table.Column<int>(type: "int", nullable: false),
                    Purpose = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PICName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PICEMail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RequestorEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EstimateBorrow = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FinalReadingPendos = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Justify = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EditionalPurposeTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PICStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PICStatusDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EditionalPICStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EditionalPICStatusDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    SCCEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SCCStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SCCStatusDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EditionalSCCStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EditionalSCCStatusDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    XrayRooms = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IFXBuilding = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SubmitDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ApprovalDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ReturnDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EditionalTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Updated = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requestors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Requestors_IFXBuilding_IFXBuilding",
                        column: x => x.IFXBuilding,
                        principalSchema: "PM_Schema",
                        principalTable: "IFXBuilding",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Requestors_XrayRooms_XrayRooms",
                        column: x => x.XrayRooms,
                        principalSchema: "PM_Schema",
                        principalTable: "XrayRooms",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Requestors_IFXBuilding",
                schema: "PM_Schema",
                table: "Requestors",
                column: "IFXBuilding");

            migrationBuilder.CreateIndex(
                name: "IX_Requestors_XrayRooms",
                schema: "PM_Schema",
                table: "Requestors",
                column: "XrayRooms");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Requestors",
                schema: "PM_Schema");
        }
    }
}
