using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
[Table("characteristic")]
public class Characteristic
{
    [Key, Required]
    public int? id { get; set; }
    [Column("product_id")]
    public int? product_id { get; set; }
    [Column("model")]
    public string? model {get;set;}
    [Column("functionfastcharge")]
    public string? functionFastCharge {get;set;}
    [Column("features")]
    public string? features {get;set;}
    [Column("constructfeatures")]
    public string? constructfeatures {get;set;}
    [Column("weight")]
    public double? weight {get;set;}
    [Column("width")]
    public double? width {get;set;}
    [Column("color")]
    public string? color {get;set;}


}
