using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Newtonsoft.Json.Linq;

namespace EF_Core_With_React.Controllers
{
    public class FavoriteGamesController : Controller
    {
        private readonly AppDbContext _db;

        public FavoriteGamesController(AppDbContext context)
        {
            _db = context;
        }

        // GET: /<controller>/
        public IActionResult Index(int id)
        {//IActionResult

            var innerGroupJoinQuery2 =
                from favoriteGame in _db.FavoriteGames
                join game in _db.Games on favoriteGame.GameId equals game.Id
                //into prodGroup
                //from prod2 in prodGroup
                //where prod2.UnitPrice > 2.50M
                select game;
            ViewBag.FavoriteGames = innerGroupJoinQuery2;
            return View();
        }




        //[HttpPost, ActionName("Favorite")]
        //[ValidateAntiForgeryToken]
        [HttpPost]
        public IActionResult Favorite(int userId, int gameId)
        {
            if (ModelState.IsValid)

            {
                //int id = 335;
                FavoriteGame favoriteGame = new FavoriteGame(){UserId=userId,GameId=gameId};
                _db.FavoriteGames.Add(favoriteGame);

                _db.SaveChanges();

                return RedirectToAction("Index","Games");

            }
            //return Ok(favoriteGame);

            return RedirectToAction("Index", "Home");
            //return View();
        }



        [HttpDelete] // delete a Favorited game using DELETE in Insomnia, for instence
        [HttpPost] // can delete by clicking a button
        public IActionResult UnFavorite(int userId, int gameId)
        {
            if (ModelState.IsValid)

            {
                var favoritedGame = _db.FavoriteGames.Where((game) => game.GameId == gameId && game.UserId==userId).First();

                _db.FavoriteGames.Remove(favoritedGame);
                _db.SaveChanges();

                return RedirectToAction("Index", "FavoriteGames");

            }
            //return Ok(favoritedGame);
            return RedirectToAction("Index", "FavoriteGames");
            //return View();
        }
    }
}
