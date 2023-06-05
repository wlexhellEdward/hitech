
public class BasketService
{
    private EF_DataContext _dataContext;
    public BasketService(EF_DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<Basket>? GetBasket(int idUser)
    {
        
        List<Basket>? basketItems = _dataContext.Basket?.Where(
            item=>item.user_id==idUser
        ).ToList();
        return basketItems;
    }


     public bool AddToBasket(int idUser, int idProduct)
    {
        Basket BasketToRemove = _dataContext.Basket.FirstOrDefault(f => f.user_id == idUser && f.product_id == idProduct);
        if (BasketToRemove!=null)
        {
            _dataContext.Basket.Remove(BasketToRemove);
            _dataContext.SaveChanges();
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
