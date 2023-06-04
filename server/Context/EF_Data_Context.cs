using Microsoft.EntityFrameworkCore;
public class EF_DataContext : DbContext
{
    public EF_DataContext(DbContextOptions<EF_DataContext> options) : base(options) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseSerialColumns();
    }

    public DbSet<Product>? Product {get;set;}  
    public DbSet<Users>? Users {get;set;}  


}


