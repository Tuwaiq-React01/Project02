using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesLibrary.Data;
using MoviesLibrary.Models;

namespace MoviesLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteTvShowsController : ControllerBase
    {
        
        private readonly AppDbContext _db;

        public FavoriteTvShowsController(AppDbContext context)
        {
            _db = context;
        }
        
        
        // GET: api/FavoriteTvShows
        [HttpGet]
        public IEnumerable<TvShow> Get()
        {
            List<FavoriteTvShow> favList = _db.FavoriteTvShows.ToList();

            List<TvShow> resultList = new List<TvShow>();
            foreach (var favTvShow in favList)
            {
                resultList.Add(_db.TvShows.SingleOrDefault(a => a.Id == favTvShow.TvShowId));
            }

            return resultList.ToList();
        }

        // // GET: api/FavoriteTvShows/5
        // [HttpGet("{id}", Name = "Get")]
        // public string Get(int id)
        // {
        //     return "value";
        // }
        
        // POST: api/FavoriteTvShows
        [HttpPost]
        public async Task<ActionResult<FavoriteTvShow>> Post(FavoriteTvShow favoriteTvShow)
        {
            _db.FavoriteTvShows.Add(favoriteTvShow);
            await _db.SaveChangesAsync();

            return Ok(favoriteTvShow);
        }
        
        // // PUT: api/FavoriteTvShows/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        // }
        
        // // DELETE: api/FavoriteTvShows/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FavoriteTvShow>> Delete(int id)
        {
            var favoriteTvShow = await _db.FavoriteTvShows.FindAsync(id);
            if (favoriteTvShow == null)
            {
                return NotFound();
            }
            _db.FavoriteTvShows.Remove(favoriteTvShow);
            await _db.SaveChangesAsync();

            return Ok(favoriteTvShow);
        }
    }
}
