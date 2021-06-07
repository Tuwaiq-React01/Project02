using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EF_Core_With_React.Controllers
{
    public class GameDetailsController : Controller
    {
        private readonly AppDbContext _db;

        public GameDetailsController(AppDbContext context)
        {
            _db = context;
            //string path = "https://www.freetogame.com/api/game?id="+id;
            //Console.WriteLine(path);
            //dynamic jGames = JObject.Parse(FetchAPI.httpReq(path));
            //GameDetail GameDetails = new GameDetail() { Id = jGames.id, Status = jGames.status, Description = jGames.description,
            //    Genre = jGames.genre, Platform = jGames.platform, Developer = jGames.developer,
            //    ReleaseDate = jGames.release_date, GameId= id };
            //ViewData["gameDetail"] = GameDetails;
        }

        // GET: /GameDetails/Index
        //public IActionResult Index(int id)
        public IActionResult Index(int id)
        {
            //var innerGroupJoinQuery2 =
            //from gameDetail in _db.GameDetails
            //join screen in _db.Screenshots on gameDetail.Id equals screen.GameDetailId
            //into ALLCOLUMNS
            //from entry in ALLCOLUMNS
            //where gameDetail.Id == id
            //select new { gameDetail.Description, gameDetail.Id, entry.Image };


            GameDetail GameDetail = _db.GameDetails.Find(id);
            var gameDetails = _db.GameDetails.Where((game) => game.Id == id).ToList();
            var screenshots = _db.Screenshots.Where((game) => game.GameDetailId == id).ToList();


            ViewData["gameDetail"] = GameDetail;
            ViewData["screenshots"] = screenshots;
            return View();
            //return innerGroupJoinQuery2;
        }
    }
}


