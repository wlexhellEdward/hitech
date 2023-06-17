using Microsoft.AspNetCore.Mvc;

[ApiController]

public class CharacteristicController : ControllerBase
{
    private readonly CharacteristicService? _characteristicService;

    public CharacteristicController(EF_DataContext dataContext)
    {
        _characteristicService = new CharacteristicService(dataContext);
    }

    [HttpGet]
    [Route("/api/characteristic/get_by_id/{product_id}")]
    public IActionResult GetById( int product_id)
    {
        return Ok(_characteristicService.GetById(product_id)); 
    }
    [HttpGet]
    [Route("/api/characteristic/get_all")]
    public IActionResult GetAll( int product_id)
    {
        return Ok(_characteristicService.GetAll()); 
    }
}
