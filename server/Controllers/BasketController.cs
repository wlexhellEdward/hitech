using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

[ApiController]

public class BasketController : ControllerBase
{
    private readonly BasketService? _basketService;

    public BasketController(EF_DataContext dataContext)
    {
        _basketService = new BasketService(dataContext);
    }


    [HttpGet]
    [Route("/api/basket/get_basket_product/{user_id}")]
    public IActionResult GetAll(int user_id)
    {
        List<Product>? BasketItems = _basketService?.GetBasket(user_id);
        return Ok(BasketItems);
    }

    [HttpPost]
    [Route("/api/basket/add_to_basket/user_id={user_id}/product_id={product_id}")]
    public IActionResult AddToBasket(int user_id, int product_id)
    {
        if (_basketService.AddToBasket(user_id, product_id))
        {
            return Ok("add");
        }
        return Ok("removed");
    }
    
    [HttpGet]
    [Route("/api/basket/get_count/{user_id}")]
    public IActionResult GetQuantity(int user_id){
        int Quantity = _basketService.GetQuantityBasketItems(user_id);
        return Ok(Quantity);
    }






}
