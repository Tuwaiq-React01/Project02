using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using Microsoft.AspNetCore.Mvc;


namespace EF_Core_With_React.Controllers
{
    public class UserController : Controller
    {
        private readonly AppDbContext _db;

        public UserController(AppDbContext context)
        {
            _db = context;
        }


        // GET: /<controller>/
        public IActionResult Index(string color="black")
        {
            //var GameDetails = _db.GameDetails.Where((game) => game.Id == id).ToList();
            //ViewData["gameDetail"] = GameDetails;
            string img = "https://www.freeiconspng.com/uploads/controller-game-icon-10.png";
            ViewData["img"] = img;
            ViewData["color"] = color;
            return View();
        }
    }
}
