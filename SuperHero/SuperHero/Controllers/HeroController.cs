using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SuperHero.Data;
using SuperHero.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace SuperHero.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HeroController : ControllerBase
    {
        private readonly AppDbContext _db;
        public HeroController(AppDbContext context)
        {
            _db = context;
        }
        [HttpGet]
        public List<InfoModel> Get()
        {
            /*for (int i =198;i<732;i++)
            {
                string api = "https://superheroapi.com/api/API_Key/" + i;
                JObject jsonArray = JObject.Parse(httpReq(api));
                List<HeroModel> tourns = new List<HeroModel>();

                Console.WriteLine(jsonArray);
                this._db.Hero.Add(new HeroModel { Id = (int)jsonArray["id"], Name = (string)jsonArray["name"] });
                this._db.Info.Add(new InfoModel
                {
                    Id = (int)jsonArray["id"],
                    FullName = (string)jsonArray["biography"]["full-name"],
                    Intelligence = (string)jsonArray["powerstats"]["intelligence"],
                    Strength = (string)jsonArray["powerstats"]["strength"],
                    Speed = (string)jsonArray["powerstats"]["speed"],
                    Power = (string)jsonArray["powerstats"]["power"],
                    Combat = (string)jsonArray["powerstats"]["combat"],
                    PlaceOfBirth = (string)jsonArray["biography"]["place-of-birth"],
                    FirstAppearance = (string)jsonArray["biography"]["first-appearance"],
                    Alignment = (string)jsonArray["biography"]["alignment"],
                    Gender = (string)jsonArray["appearance"]["gender"],
                    Race = (string)jsonArray["appearance"]["race"],
                    Height = (string)jsonArray["appearance"]["height"][1]==null? (string)jsonArray["appearance"]["height"][0]:(string)jsonArray["appearance"]["height"][1],
                    Weight = (string)jsonArray["appearance"]["weight"][1]==null? (string)jsonArray["appearance"]["weight"][0]:(string)jsonArray["appearance"]["weight"][1],
                    EyeColor = (string)jsonArray["appearance"]["eye-color"],
                    HairColor = (string)jsonArray["appearance"]["hair-color"],
                    Image = (string)jsonArray["image"]["url"],
                    HeroId = (int)jsonArray["id"]

                });
            this._db.SaveChanges();
            }*/
            
            
            return _db.Info.Where(s => s.Id < 41).ToList();
        }
        public string httpReq(string api)
        {
            using (var client = new HttpClient())
            {
                var uri = new Uri(api);

                var resonse = client.GetAsync(uri);
                resonse.Wait();
                string res = resonse.Result.Content.ReadAsStringAsync().Result;

                return res;
            }
        }
        /*public IActionResult Index()
        {
            return View();
        }*/
    }
}
