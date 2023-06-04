using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

[ApiController]

public class UserController : ControllerBase
{
    private readonly UserService? _userService;



    public UserController(EF_DataContext dataContext)
    {
        _userService = new UserService(dataContext);
    }


    [HttpGet]
    [Route("api/users/get_all")]
    public IActionResult GetAll()
    {
        List<Users> users = _userService?.GetAllUsers();
        return Ok(users);
    }



}
