using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
[Table("basket")]
public class Basket
{
    [Key, Required]
    public int? id { get; set; }
    [Column("user_id")]
    public int? user_id { get; set; }
    [Column("product_id")]
    public int? product_id { get; set; }
}
