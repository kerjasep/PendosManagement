using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace PendosManagementSystem.Models
{
    public class Requestor
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Department { get; set; }
        public int? BadgeUser { get; set; }
        public string? Purpose { get; set; }
        public string? PICName { get; set; } = "Wikussangker Wirabumi";
        public string? PICEMail { get; set; } = "wikussangker.wirabumi@infineon.com";
        public string? RequestorEmail { get; set; }
        public DateTime? EstimateBorrowStart { get; set; }
        public DateTime? EstimateBorrowEnd { get; set; }
        public string? FinalReadingPendos { get; set; }
        public string? Justify { get; set; }
        public string? EditionalPurposeTime { get; set; }
        public string? PICStatus { get; set; }
        public DateTime? PICStatusDate { get; set; }
        public string? EditionalPICStatus { get; set; }
        public DateTime? EditionalPICStatusDate { get; set; }
        public string SCCEmail { get; set; } = "sepriadi.external@infineon.com";
        public string? SCCStatus { get; set; }
        public DateTime? SCCStatusDate { get; set; }
        public string? EditionalSCCStatus { get; set; }
        public DateTime? EditionalSCCStatusDate { get; set; }

        // Foreign Keys
        public Guid? XrayRoomsId { get; set; }
        public Guid? IFXBuildingId { get; set; }

        // Navigation Properties
        [ForeignKey("IFXBuildingId")]
        [ValidateNever]
        public virtual IFXBuilding? IFXBuilding { get; set; }

        [ForeignKey("XrayRoomsId")]
        [ValidateNever]
        public virtual XrayRoom? XrayRooms { get; set; }

        public DateTime? SubmitDate { get; set; }
        public DateTime? ApprovalDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public DateTime? EditionalTime { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? Updated { get; set; }
    }
}