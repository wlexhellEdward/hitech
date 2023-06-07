
public class FavoriteService
{
    private EF_DataContext _dataContext;
    public FavoriteService(EF_DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<Product>? GetFavorite(int idUser)
    {
        

        List<Favorite>? favoriteItems = _dataContext.Favorite?.Where(
            item => item.user_id == idUser
        ).ToList(); 

        List<Product>? productFavorite = new List<Product>();
        favoriteItems.ForEach(
            itemBasket =>
            {
                productFavorite.Add(_dataContext.Product.FirstOrDefault(item => item.id == itemBasket.product_id));
            }
        );
        return productFavorite;
    }

    public int GetQuantityFavoriteItems(int idUser){
         List<Favorite>? favoriteItems = _dataContext.Favorite?.Where(
            item => item.user_id == idUser
        ).ToList();
        return favoriteItems.Count();
    }

    public bool AddToFavorite(int idUser, int idProduct)
    {
        Favorite favoriteToRemove = _dataContext.Favorite.FirstOrDefault(f => f.user_id == idUser && f.product_id == idProduct);
        Product productToChange = _dataContext.Product.FirstOrDefault(f => f.id == idProduct);

        if (favoriteToRemove!=null)
        {
            productToChange.favorite=false;
            _dataContext.Favorite.Remove(favoriteToRemove);
            _dataContext.SaveChanges();
            return false;
        }
        else
        {
            Favorite newFavorite = new Favorite
            {
                user_id = idUser,
                product_id = idProduct,
            };
            productToChange.favorite=true;

            _dataContext.Favorite?.Add(newFavorite);
            _dataContext.SaveChanges();
            return true;
        }
    }



}
