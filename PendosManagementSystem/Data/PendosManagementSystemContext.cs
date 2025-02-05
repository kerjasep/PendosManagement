using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PendosManagementSystem.Models;

namespace PendosManagementSystem.Data
{
    public class PendosManagementSystemContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public PendosManagementSystemContext(DbContextOptions<PendosManagementSystemContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        public DbSet<ValidUser> ValidUser { get; set; }
        public DbSet<IFXBuilding> IFXBuilding { get; set; } = default!;
        public DbSet<XrayRoom> XrayRooms { get; set; } = default!;
        public DbSet<Requestor> Requestors { get; set; } = default!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var connectionString = _configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer(
                connectionString,
                x => x.MigrationsHistoryTable("PM_EFMigrationsHistory", "PM_Schema"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("PM_Schema");

            modelBuilder.Entity<XrayRoom>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired();
                entity.HasOne(x => x.Building)
                      .WithMany(b => b.XrayRooms)
                      .HasForeignKey(x => x.BuildingId)
                      .OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<IFXBuilding>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Requestor>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired();
                entity.Property(e => e.Department).IsRequired();
                entity.Property(e => e.BadgeUser).IsRequired();
                entity.Property(e => e.Purpose).IsRequired();
                entity.Property(e => e.EstimateBorrowStart).IsRequired();
                entity.Property(e => e.EstimateBorrowEnd).IsRequired();
                entity.Property(e => e.RequestorEmail).IsRequired();

                entity.HasOne(r => r.XrayRooms)
                      .WithMany()
                      .HasForeignKey(r => r.XrayRoomsId)
                      .OnDelete(DeleteBehavior.Restrict);

                entity.HasOne(r => r.IFXBuilding)
                      .WithMany()
                      .HasForeignKey(r => r.IFXBuildingId)
                      .OnDelete(DeleteBehavior.Restrict);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}