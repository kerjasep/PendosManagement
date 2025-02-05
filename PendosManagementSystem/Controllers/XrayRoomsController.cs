using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PendosManagementSystem.Data;
using PendosManagementSystem.Models;

namespace PendosManagementSystem.Controllers
{
    public class XrayRoomsController : Controller
    {
        private readonly PendosManagementSystemContext _context;

        public XrayRoomsController(PendosManagementSystemContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var xrayRooms = await _context.XrayRooms
                .Include(x => x.Building)
                .ToListAsync();
            return View(xrayRooms);
        }

        public async Task<IActionResult> Details(Guid id)
        {
            var xrayRoom = await _context.XrayRooms
                .Include(x => x.Building)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (xrayRoom == null)
                return NotFound();

            return View(xrayRoom);
        }

        public IActionResult Create()
        {
            ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name");
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(XrayRoom xrayRoom)
        {
            if (ModelState.IsValid)
            {
                xrayRoom.Id = Guid.NewGuid();
                _context.Add(xrayRoom);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name", xrayRoom.BuildingId);
            return View(xrayRoom);
        }

        public async Task<IActionResult> Edit(Guid id)
        {
            var xrayRoom = await _context.XrayRooms.FindAsync(id);

            if (xrayRoom == null)
                return NotFound();

            ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name", xrayRoom.BuildingId);
            return View(xrayRoom);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, XrayRoom xrayRoom)
        {
            if (id != xrayRoom.Id)
                return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(xrayRoom);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!XrayRoomExists(xrayRoom.Id))
                        return NotFound();
                    throw;
                }
            }
            ViewData["Buildings"] = new SelectList(_context.IFXBuilding, "Id", "Name", xrayRoom.BuildingId);
            return View(xrayRoom);
        }

        public async Task<IActionResult> Delete(Guid id)
        {
            var xrayRoom = await _context.XrayRooms
                .Include(x => x.Building)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (xrayRoom == null)
                return NotFound();

            return View(xrayRoom);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var xrayRoom = await _context.XrayRooms.FindAsync(id);
            if (xrayRoom != null)
            {
                _context.XrayRooms.Remove(xrayRoom);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool XrayRoomExists(Guid id)
        {
            return _context.XrayRooms.Any(e => e.Id == id);
        }
    }
}