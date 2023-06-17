
public class BasketService
{
    private EF_DataContext _dataContext;
    public BasketService(EF_DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<Product>? GetBasket(int idUser)
    {

        List<Basket>? basketItems = _dataContext.Basket?.Where(
            item => item.user_id == idUser
        ).ToList(); 

        List<Product>? productBasket = new List<Product>();
        basketItems.ForEach(
            itemBasket =>
            {
                productBasket.Add(_dataContext.Product.FirstOrDefault(item => item.id == itemBasket.product_id));
            }
        );
        return productBasket;
    }

    public int GetQuantityBasketItems(int idUser)
    {
        List<Basket>? basketItems = _dataContext.Basket?.Where(
           item => item.user_id == idUser
       ).ToList();
        return basketItems.Count();
    }


    public bool AddToBasket(int idUser, int idProduct)
    {
        Basket BasketToRemove = _dataContext.Basket.FirstOrDefault(f => f.user_id == idUser && f.product_id == idProduct);
        Product productToChange = _dataContext.Product.FirstOrDefault(f => f.id == idProduct);
        
        if (BasketToRemove != null)
        {
            _dataContext.Basket.Remove(BasketToRemove);
            _dataContext.SaveChanges();
            productToChange.basket=false;
            return false;
        }
        else
        {
            Basket newBasket = new Basket
            {
                user_id = idUser,
                product_id = idProduct,
            };
            productToChange.basket=true;

            _dataContext.Basket?.Add(newBasket);
            _dataContext.SaveChanges();
            return true;
        }
    }
    public bool AddToBasketFromFavorite(int idUser, int idProduct)
    {
        Basket BasketToRemove = _dataContext.Basket.FirstOrDefault(f => f.user_id == idUser && f.product_id == idProduct);
        if (BasketToRemove != null)
        {
            return false;
        }
        else
        {
            Basket newBasket = new Basket
            {
                user_id = idUser,
                product_id = idProduct,
            };
            _dataContext.Basket?.Add(newBasket);
            _dataContext.SaveChanges();
            return true;
        }
    }




}
