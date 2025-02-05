using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PendosManagementSystem.Data;
using PendosManagementSystem.Models;

namespace PendosManagementSystem.Controllers
{
    public class IFXBuildingsController : Controller
    {
        private readonly PendosManagementSystemContext _context;

        public IFXBuildingsController(PendosManagementSystemContext context)
        {
            _context = context;
        }

        // GET: IFXBuildings
        public async Task<IActionResult> Index()
        {
            return View(await _context.IFXBuilding.ToListAsync());
        }

        // GET: IFXBuildings/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var iFXBuilding = await _context.IFXBuilding
                .FirstOrDefaultAsync(m => m.Id == id);
            if (iFXBuilding == null)
            {
                return NotFound();
            }

            return View(iFXBuilding);
        }

        // GET: IFXBuildings/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: IFXBuildings/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name")] IFXBuilding iFXBuilding)
        {
            if (ModelState.IsValid)
            {
                iFXBuilding.Id = Guid.NewGuid();
                _context.Add(iFXBuilding);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(iFXBuilding);
        }

        // GET: IFXBuildings/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var iFXBuilding = await _context.IFXBuilding.FindAsync(id);
            if (iFXBuilding == null)
            {
                return NotFound();
            }
            return View(iFXBuilding);
        }

        // POST: IFXBuildings/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("Id,Name")] IFXBuilding iFXBuilding)
        {
            if (id != iFXBuilding.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(iFXBuilding);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!IFXBuildingExists(iFXBuilding.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(iFXBuilding);
        }

        // GET: IFXBuildings/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var iFXBuilding = await _context.IFXBuilding
                .FirstOrDefaultAsync(m => m.Id == id);
            if (iFXBuilding == null)
            {
                return NotFound();
            }

            return View(iFXBuilding);
        }

        // POST: IFXBuildings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var iFXBuilding = await _context.IFXBuilding.FindAsync(id);
            if (iFXBuilding != null)
            {
                _context.IFXBuilding.Remove(iFXBuilding);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool IFXBuildingExists(Guid id)
        {
            return _context.IFXBuilding.Any(e => e.Id == id);
        }
    }
}
