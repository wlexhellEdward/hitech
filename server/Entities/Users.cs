using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
[Table("Users")]
public class Users
{
    [Key, Required]
    public int? id { get; set; }
    [Column("login")]
    public string? login { get; set; }
    [Column("password")]
    public string? password { get; set; }
}
