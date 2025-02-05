using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PendosManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class estimateborrowtime2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requestors_IFXBuilding_IFXBuilding",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropForeignKey(
                name: "FK_Requestors_XrayRooms_XrayRooms",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.RenameColumn(
                name: "XrayRooms",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "XrayRoomsId");

            migrationBuilder.RenameColumn(
                name: "IFXBuilding",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "XrayRoomId");

            migrationBuilder.RenameIndex(
                name: "IX_Requestors_XrayRooms",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "IX_Requestors_XrayRoomsId");

            migrationBuilder.RenameIndex(
                name: "IX_Requestors_IFXBuilding",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "IX_Requestors_XrayRoomId");

            migrationBuilder.AddColumn<Guid>(
                name: "IFXBuildingId",
                schema: "PM_Schema",
                table: "Requestors",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "IFXBuildingId1",
                schema: "PM_Schema",
                table: "Requestors",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Requestors_IFXBuildingId",
                schema: "PM_Schema",
                table: "Requestors",
                column: "IFXBuildingId");

            migrationBuilder.CreateIndex(
                name: "IX_Requestors_IFXBuildingId1",
                schema: "PM_Schema",
                table: "Requestors",
                column: "IFXBuildingId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Requestors_IFXBuilding_IFXBuildingId",
                schema: "PM_Schema",
                table: "Requestors",
                column: "IFXBuildingId",
                principalSchema: "PM_Schema",
                principalTable: "IFXBuilding",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Requestors_IFXBuilding_IFXBuildingId1",
                schema: "PM_Schema",
                table: "Requestors",
                column: "IFXBuildingId1",
                principalSchema: "PM_Schema",
                principalTable: "IFXBuilding",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Requestors_XrayRooms_XrayRoomId",
                schema: "PM_Schema",
                table: "Requestors",
                column: "XrayRoomId",
                principalSchema: "PM_Schema",
                principalTable: "XrayRooms",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Requestors_XrayRooms_XrayRoomsId",
                schema: "PM_Schema",
                table: "Requestors",
                column: "XrayRoomsId",
                principalSchema: "PM_Schema",
                principalTable: "XrayRooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requestors_IFXBuilding_IFXBuildingId",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropForeignKey(
                name: "FK_Requestors_IFXBuilding_IFXBuildingId1",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropForeignKey(
                name: "FK_Requestors_XrayRooms_XrayRoomId",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropForeignKey(
                name: "FK_Requestors_XrayRooms_XrayRoomsId",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropIndex(
                name: "IX_Requestors_IFXBuildingId",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropIndex(
                name: "IX_Requestors_IFXBuildingId1",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropColumn(
                name: "IFXBuildingId",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.DropColumn(
                name: "IFXBuildingId1",
                schema: "PM_Schema",
                table: "Requestors");

            migrationBuilder.RenameColumn(
                name: "XrayRoomsId",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "XrayRooms");

            migrationBuilder.RenameColumn(
                name: "XrayRoomId",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "IFXBuilding");

            migrationBuilder.RenameIndex(
                name: "IX_Requestors_XrayRoomsId",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "IX_Requestors_XrayRooms");

            migrationBuilder.RenameIndex(
                name: "IX_Requestors_XrayRoomId",
                schema: "PM_Schema",
                table: "Requestors",
                newName: "IX_Requestors_IFXBuilding");

            migrationBuilder.AddForeignKey(
                name: "FK_Requestors_IFXBuilding_IFXBuilding",
                schema: "PM_Schema",
                table: "Requestors",
                column: "IFXBuilding",
                principalSchema: "PM_Schema",
                principalTable: "IFXBuilding",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Requestors_XrayRooms_XrayRooms",
                schema: "PM_Schema",
                table: "Requestors",
                column: "XrayRooms",
                principalSchema: "PM_Schema",
                principalTable: "XrayRooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
