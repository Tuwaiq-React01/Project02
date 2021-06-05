namespace MoviesLibrary.Models
{
    public class FavoriteMovie
    {
        public int Id { get; set; }
        
        // Navigations properties
        public Movie Movie { get; set; } 
        public int MovieId { get; set; } //FK
    }
}