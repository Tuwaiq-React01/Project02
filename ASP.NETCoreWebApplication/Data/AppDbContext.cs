using ASP.NETCoreWebApplication.Models;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }
        
        public DbSet<AnimeModel> Anime { set; get; }
        public DbSet<UsersModel> User { set; get; }
        public DbSet<UserInfoModel> UserInfo { set; get; }
        public DbSet<AnimeQuotesModel> AnimeQuotes { set; get; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UsersModel>().HasData(new UsersModel() {Id = 1,Name = "Sultan"});
            
            modelBuilder.Entity<UserInfoModel>()
                .HasData(new UserInfoModel()
                    {
                        Id = 1,
                        Email = "sultan.whatever@whatever.com",
                        Password = "**************",
                        UserName = "SSSmmm123"
                    }
                );
        }
    }
}