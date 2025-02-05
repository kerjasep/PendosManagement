using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace PendosManagementSystem.Models
{
    public class IFXBuilding
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        [ValidateNever]
        public virtual ICollection<XrayRoom> XrayRooms { get; set; }
        [ValidateNever]
        public virtual ICollection<Requestor> Requestors { get; set; }
    }
}
    
