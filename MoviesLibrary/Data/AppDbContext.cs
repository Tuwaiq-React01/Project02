using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using Microsoft.EntityFrameworkCore;
using MoviesLibrary.Models;
using Newtonsoft.Json.Linq;

namespace MoviesLibrary.Data
{
    public class AppDbContext  : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Room>().Property(r => r.RoomType).IsRequired();
            
            // seeding
            List<Movie> moviesList = GetMovieList();

            for (int i = 0; i < moviesList.Count; i++)
            {
                modelBuilder.Entity<Movie>().HasData(new Movie()
                    {Id = moviesList[i].Id,
                        Title = moviesList[i].Title,
                        Date = moviesList[i].Date,
                        Summary = moviesList[i].Summary,
                        Rating = moviesList[i].Rating,
                        Poster = moviesList[i].Poster});
            }
            
            List<TvShow> tvShowList = GetTvShowsList();

            for (int i = 0; i < tvShowList.Count; i++)
            {
                modelBuilder.Entity<TvShow>().HasData(new TvShow()
                {Id = tvShowList[i].Id,
                    Title = tvShowList[i].Title,
                    Date = tvShowList[i].Date,
                    Summary = tvShowList[i].Summary,
                    Rating = tvShowList[i].Rating,
                    Poster = tvShowList[i].Poster});
            }
             
        }

        public DbSet<Movie>Movies { get; set; }
        public DbSet<TvShow>TvShows { get; set; }
        public DbSet<FavoriteMovie>FavoriteMovies { get; set; }
        public DbSet<FavoriteTvShow>FavoriteTvShows { get; set; }
        
        
        public List<Movie> GetMovieList()
        {
            List<Movie> MovieList = new List<Movie>();
            JArray result = GetJSON(true);
            for (int i = 0; i < result.Count; i++)
            {
                MovieList.Add(new Movie()
                {
                    Id = i + 1,
                    Title = result[i]["title"].ToString(),
                    Date = result[i]["release_date"].ToString(),
                    Summary = result[i]["overview"].ToString(),
                    Rating = Convert.ToInt32(result[i]["vote_average"]),
                    Poster = "https://image.tmdb.org/t/p/w300" + result[i]["poster_path"].ToString()
                });
            }

            return MovieList;
        }
        public List<TvShow> GetTvShowsList()
        {
            List<TvShow> tvShowList = new List<TvShow>();
            JArray result = GetJSON(false);
            for (int i = 0; i < result.Count; i++)
            {
                tvShowList.Add(new TvShow()
                {
                    Id = i + 1,
                    Title = result[i]["name"].ToString(),
                    Date = result[i]["first_air_date"].ToString(),
                    Summary = result[i]["overview"].ToString(),
                    Rating = Convert.ToInt32(result[i]["vote_average"]),
                    Poster = "https://image.tmdb.org/t/p/w300" + result[i]["poster_path"].ToString()
                });
            }

            return tvShowList;
        }

        public JArray GetJSON(bool what)
        {
            string html = string.Empty;
            
            string url = what? "https://api.themoviedb.org/3/movie/popular?api_key=5b1b9f67b573e2104ae29d0da0c6104f&language=en-US&page=1" :@"https://api.themoviedb.org/3/tv/popular?api_key=5b1b9f67b573e2104ae29d0da0c6104f&language=en-US&page=1";
            
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.AutomaticDecompression = DecompressionMethods.GZip;
            
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (Stream stream = response.GetResponseStream())
            using (StreamReader reader = new StreamReader(stream))
            {
                html = reader.ReadToEnd();
            }
            
            var res = JObject.Parse(html);
            JArray result = JArray.Parse(res["results"].ToString());

            return result;
        }
    }
    
    
}