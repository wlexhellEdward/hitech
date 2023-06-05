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
        List<Basket>? BasketItems = _basketService?.GetBasket(user_id);
        return Ok(BasketItems);
    }

    [HttpGet]
    [Route("/api/favorite/add_to_basket/user_id={user_id}/product_id={product_id}")]
    public IActionResult AddToFavorite(int user_id, int product_id)
    {
        if (_basketService.AddToBasket(user_id, product_id))
        {
            return Ok("add");
        }
        return Ok("removed");
    }





}
