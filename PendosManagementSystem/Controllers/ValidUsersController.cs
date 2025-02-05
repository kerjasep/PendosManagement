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
    public class ValidUsersController : Controller
    {
        private readonly PendosManagementSystemContext _context;

        public ValidUsersController(PendosManagementSystemContext context)
        {
            _context = context;
        }

        // GET: ValidUsers
        public async Task<IActionResult> Index()
        {
            return View(await _context.ValidUser.ToListAsync());
        }

        // GET: ValidUsers/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var validUser = await _context.ValidUser
                .FirstOrDefaultAsync(m => m.Id == id);
            if (validUser == null)
            {
                return NotFound();
            }

            return View(validUser);
        }

        // GET: ValidUsers/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: ValidUsers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Email,Department,BadgeNumber")] ValidUser validUser)
        {
            if (ModelState.IsValid)
            {
                validUser.Id = Guid.NewGuid();
                _context.Add(validUser);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(validUser);
        }

        // GET: ValidUsers/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var validUser = await _context.ValidUser.FindAsync(id);
            if (validUser == null)
            {
                return NotFound();
            }
            return View(validUser);
        }

        // POST: ValidUsers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("Id,Name,Email,Department,BadgeNumber")] ValidUser validUser)
        {
            if (id != validUser.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(validUser);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ValidUserExists(validUser.Id))
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
            return View(validUser);
        }

        // GET: ValidUsers/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var validUser = await _context.ValidUser
                .FirstOrDefaultAsync(m => m.Id == id);
            if (validUser == null)
            {
                return NotFound();
            }

            return View(validUser);
        }

        // POST: ValidUsers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var validUser = await _context.ValidUser.FindAsync(id);
            if (validUser != null)
            {
                _context.ValidUser.Remove(validUser);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ValidUserExists(Guid id)
        {
            return _context.ValidUser.Any(e => e.Id == id);
        }
    }
}
