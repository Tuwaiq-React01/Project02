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
    public class FavoriteMoviesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public FavoriteMoviesController(AppDbContext context)
        {
            _db = context;
        }
        
        
        // GET: api/FavoriteMovies
        // [HttpGet]
        // public IEnumerable<FavoriteMovie> Get()
        // {
        //     return _db.FavoriteMovies.ToList();
        // }
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            List<FavoriteMovie> favList = _db.FavoriteMovies.ToList();

            List<Movie> resultList = new List<Movie>();
            foreach (var favMovie in favList)
            {
                resultList.Add(_db.Movies.SingleOrDefault(a => a.Id == favMovie.MovieId));
            }
                
            return resultList.ToList();
        }

        // // GET: api/FavoriteMovies/5
        // [HttpGet("{id}", Name = "Get")]
        // public string Get(int id)
        // {
        //     return "value";
        // }
        //
        // POST: api/FavoriteMovies
        [HttpPost]
        public async Task<ActionResult<FavoriteMovie>> Post(FavoriteMovie favoriteMovie)
        {
            _db.FavoriteMovies.Add(favoriteMovie);
            await _db.SaveChangesAsync();

            return Ok(favoriteMovie);
        }
        //
        // // PUT: api/FavoriteMovies/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value)
        // {
        //     
        // }
        //
        
        // DELETE: api/FavoriteMovies/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FavoriteMovie>> Delete(int id)
        {
            var favoriteMovie = await _db.FavoriteMovies.FindAsync(id);
            if (favoriteMovie == null)
            {
                return NotFound();
            }
            _db.FavoriteMovies.Remove(favoriteMovie);
            await _db.SaveChangesAsync();

            return Ok(favoriteMovie);
        }
    }
}
