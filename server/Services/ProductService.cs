
public class ProductService
{
    private EF_DataContext _dataContext;
    public ProductService(EF_DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<Product>? GetAllProducts()
    {
        List<Product>? allProducts = _dataContext.Product?.ToList();
        return allProducts;
    }

    public List<Product>? GetById(int id)
    {
        List<Product>? specificTypeProducts  = _dataContext.Product?.Where(
           product => product.id == id
        ).ToList();
    
        return specificTypeProducts ;
    }



}
