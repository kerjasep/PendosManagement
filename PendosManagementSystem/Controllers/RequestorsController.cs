using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PendosManagementSystem.Data;
using PendosManagementSystem.Models;

namespace PendosManagementSystem.Controllers
{
    public class RequestorsController : Controller
    {
        private readonly PendosManagementSystemContext _context;

        public RequestorsController(PendosManagementSystemContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.Requestors
                .Include(r => r.IFXBuilding)
                .Include(r => r.XrayRooms)
                .ToListAsync());
        }

        public async Task<IActionResult> Details(Guid id)
        {
            var requestor = await _context.Requestors
                .Include(r => r.IFXBuilding)
                .Include(r => r.XrayRooms)
                .FirstOrDefaultAsync(r => r.Id == id);

            return requestor == null ? NotFound() : View(requestor);
        }

        public IActionResult Create()
        {
            ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name");
            return View();
        }

        [HttpPost]
        public async Task<JsonResult> GetUserDetails([FromForm] int badge)
        {
            var user = await _context.ValidUser
                .FirstOrDefaultAsync(u => u.BadgeNumber == badge);

            if (user == null)
            {
                return Json(new { isValid = false });
            }

            return Json(new
            {
                isValid = true,
                name = user.Name,
                department = user.Department,
                email = user.Email
            });
        }

        [HttpGet]
        public async Task<JsonResult> GetXrayRooms(Guid buildingId)
        {
            var rooms = await _context.XrayRooms
                .Where(x => x.BuildingId == buildingId)
                .Select(x => new { x.Id, x.Name })
                .ToListAsync();

            return Json(rooms);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Requestor requestor)
        {
            if (!ModelState.IsValid)
            {
                ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name");
                return View(requestor);
            }

            requestor.Id = Guid.NewGuid();
            requestor.Created = DateTime.Now;
            requestor.SubmitDate = DateTime.Now;

            _context.Add(requestor);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        public async Task<IActionResult> Edit(Guid id)
        {
            var requestor = await _context.Requestors.FindAsync(id);
            if (requestor == null) return NotFound();

            ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name", requestor.IFXBuildingId);
            if (requestor.IFXBuildingId.HasValue)
            {
                ViewData["XrayRooms"] = new SelectList(
                    await _context.XrayRooms.Where(x => x.BuildingId == requestor.IFXBuildingId).ToListAsync(),
                    "Id", "Name", requestor.XrayRoomsId);
            }

            return View(requestor);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, Requestor requestor)
        {
            if (id != requestor.Id) return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    requestor.Updated = DateTime.Now;
                    _context.Update(requestor);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RequestorExists(requestor.Id))
                        return NotFound();
                    throw;
                }
            }

            ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name", requestor.IFXBuilding);
            return View(requestor);
        }

        public async Task<IActionResult> Delete(Guid id)
        {
            var requestor = await _context.Requestors
                .Include(r => r.IFXBuilding)
                .Include(r => r.XrayRooms)
                .FirstOrDefaultAsync(r => r.Id == id);

            return requestor == null ? NotFound() : View(requestor);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var requestor = await _context.Requestors.FindAsync(id);
            if (requestor != null)
            {
                _context.Requestors.Remove(requestor);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool RequestorExists(Guid id)
        {
            return _context.Requestors.Any(e => e.Id == id);
        }
    }
}