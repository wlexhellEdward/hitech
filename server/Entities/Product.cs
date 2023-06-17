using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
[Table("product")]
public class Product
{
    [Key, Required]
    public int? id { get; set; }
    [Column("name")]
    public string? name { get; set; }
    [Column("camera")]
    public string? camera { get; set; }
    [Column("leftImage")]
    public string? leftImage { get; set; }
    [Column("back")]
    public string? back { get; set; }
    [Column("font")]
    public string? font { get; set; }
    [Column("countReview"), Required]
    public int? countReview { get; set; }
    [Column("rating")]
    public double? rating { get; set; }
    [Column("count")]
    public int? count { get; set; }
    [Column("type")]
    public string? type { get; set; }
    [Column("favorite")]
    public bool? favorite { get; set; }
    [Column("price")]
    public double? price { get; set; }
    [Column("basket")]
    public bool? basket { get; set; }

}
