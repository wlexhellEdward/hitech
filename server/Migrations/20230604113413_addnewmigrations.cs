using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class addnewmigrations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "product");

            migrationBuilder.CreateTable(
                name: "products",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    name = table.Column<string>(type: "text", nullable: true),
                    camera = table.Column<string>(type: "text", nullable: true),
                    leftImage = table.Column<string>(type: "text", nullable: true),
                    back = table.Column<string>(type: "text", nullable: true),
                    font = table.Column<string>(type: "text", nullable: true),
                    countReview = table.Column<int>(type: "integer", nullable: false),
                    rating = table.Column<double>(type: "double precision", nullable: true),
                    count = table.Column<int>(type: "integer", nullable: true),
                    type = table.Column<string>(type: "text", nullable: true),
                    favorite = table.Column<bool>(type: "boolean", nullable: true),
                    price = table.Column<double>(type: "double precision", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_products", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "products");

            migrationBuilder.CreateTable(
                name: "product",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    back = table.Column<string>(type: "text", nullable: true),
                    camera = table.Column<string>(type: "text", nullable: true),
                    count = table.Column<int>(type: "integer", nullable: true),
                    countReview = table.Column<int>(type: "integer", nullable: true),
                    favorite = table.Column<bool>(type: "boolean", nullable: true),
                    font = table.Column<string>(type: "text", nullable: true),
                    leftImage = table.Column<string>(type: "text", nullable: true),
                    name = table.Column<string>(type: "text", nullable: true),
                    price = table.Column<double>(type: "double precision", nullable: true),
                    rating = table.Column<double>(type: "double precision", nullable: true),
                    type = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_product", x => x.id);
                });
        }
    }
}
