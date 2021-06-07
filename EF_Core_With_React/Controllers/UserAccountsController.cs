using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;


namespace EF_Core_With_React.Controllers
{
    public class UserAccountsController : Controller
    {

        private readonly AppDbContext _db;

        public UserAccountsController(AppDbContext context)
        {
            _db = context;
        }

        // GET: /<controller>/
        public IActionResult Index(int id)
        {
            //ViewData["UserProfile"]
            Debug.WriteLine("Before");
            UserAccount userAcc = _db.UserAccounts.Find(id);
            Debug.WriteLine("After");
            ViewData["userAccount"] = userAcc;
            return View();
        }


        public IActionResult SignIn()
        {
            return View();
        }


        [HttpPut]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult EditAccount(int? id)
        {
            if (id == null)
            {
            var accountToUpdate = _db.UserAccounts.Find(id);

            _db.UserAccounts.Update(accountToUpdate);
            _db.SaveChanges();

                return RedirectToAction("Index", "UserAccounts");
            }
        return RedirectToAction("Index", "UserAccounts");
        }
    
    }
}
