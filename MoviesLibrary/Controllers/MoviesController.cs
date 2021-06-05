using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesLibrary.Data;
using MoviesLibrary.Models;

namespace MoviesLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public MoviesController(AppDbContext context)
        {
            _db = context;
        }
        
        // GET: api/Movies
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            List<FavoriteMovie> favList = _db.FavoriteMovies.ToList();
            
            return _db.Movies.ToList();
        }
        
        // GET: api/Movies/5
        [HttpGet("{id}", Name = "GetMovie")]
        public IEnumerable<Movie> Get(int id)
        {
            // Response.Redirect("Page2.aspx");
            return _db.Movies.Where(a => a.Id == id).ToList();
        }

        // POST: api/Movies
        [HttpPost]
        public async Task<ActionResult<Movie>> Post(Movie movie)
        {
            var movieInDatabase =  _db.Movies.Where(m => m.Title == movie.Title).ToList();
            if (movieInDatabase.Count > 0)
            {
                // Console.WriteLine("Hi");
                return null;
            }
            // Console.WriteLine("Yooo");
            _db.Movies.Add(movie);
            await _db.SaveChangesAsync();
            
            // Response.Redirect("");
            return Ok(movie);
        }
    }
}