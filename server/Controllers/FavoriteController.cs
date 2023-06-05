using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

[ApiController]

public class FavoriteController : ControllerBase
{
    private readonly FavoriteService? _favoriteService;

    public FavoriteController(EF_DataContext dataContext)
    {
        _favoriteService = new FavoriteService(dataContext);
    }


    [HttpGet]
    [Route("/api/favorite/get_favorite_product/{user_id}")]
    public IActionResult GetAll(int user_id)
    {
        List<Favorite>? FavoriteItems = _favoriteService?.GetFavorite(user_id);
        return Ok(FavoriteItems);
    }


    [HttpGet]
    [Route("/api/favorite/add_to_favorite/user_id={user_id}/product_id={product_id}")]
    public IActionResult AddToFavorite(int user_id,int product_id)
    {
        if(_favoriteService.AddToFavorite(user_id,product_id)){
            return Ok("add");
        }
        return Ok("removed");
    }
    



}
