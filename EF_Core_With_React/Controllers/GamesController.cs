using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EF_Core_With_React.Data;
using EF_Core_With_React.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace EF_Core_With_React.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase
    {

        private readonly AppDbContext _db;

        public GamesController(AppDbContext context)
        {
            _db = context;
        }

        [HttpGet]
        public IList<Game> Get()
        {
            return _db.Games.ToList();
        }
    }
}
