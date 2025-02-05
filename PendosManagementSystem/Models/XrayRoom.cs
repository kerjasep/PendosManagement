using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace PendosManagementSystem.Models
{
    public class XrayRoom
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Guid BuildingId { get; set; }
        [ValidateNever]
        public virtual IFXBuilding Building { get; set; }
        [ValidateNever]
        public virtual ICollection<Requestor> Requestors { get; set; }
    }
}
