namespace MoviesLibrary.Models
{
    public class FavoriteTvShow
    {
        public int Id { get; set; }
        
        // Navigations properties
        public TvShow TvShow { get; set; } 
        public int TvShowId { get; set; } //FK
    }
}