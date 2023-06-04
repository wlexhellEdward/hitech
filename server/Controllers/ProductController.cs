using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

[ApiController]

public class ProductController : ControllerBase
{
    private readonly ProductService? _productService;

    public ProductController(EF_DataContext dataContext)
    {
        _productService = new ProductService(dataContext);
    }


    [HttpGet]
    [Route("/api/products/get_all")]
    public IActionResult GetAll()
    {
        List<Product>? allProducts = _productService?.GetAllProducts();
        return Ok(allProducts);
    }

    [Route("/api/products/get_by_id/{id}")]
    public IActionResult GetById(int id)
    {
        List<Product>? allProducts = _productService?.GetById(id);
        return Ok(allProducts);
    }



}
