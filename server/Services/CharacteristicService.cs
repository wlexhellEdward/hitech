
public class CharacteristicService
{
    private EF_DataContext _dataContext;
    public CharacteristicService(EF_DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<Characteristic>? GetById(int id)
    {
        List<Characteristic>? characteristicsProduct = _dataContext.Characteristics?.Where(
            product => product.product_id == id
        ).ToList();
        return characteristicsProduct;
    }
    public List<Characteristic>? GetAll()
    {
        List<Characteristic>? characteristicsProduct = _dataContext.Characteristics?.ToList();
        return characteristicsProduct;
    }



}
