
public class FavoriteService
{
    private EF_DataContext _dataContext;
    public FavoriteService(EF_DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<Favorite>? GetFavorite(int idUser)
    {
        List<Favorite>? favoriteItems = _dataContext.Favorite?.Where(
            item => item.user_id == idUser
        ).ToList();
        return favoriteItems;
    }

    public bool AddToFavorite(int idUser, int idProduct)
    {
        Favorite favoriteToRemove = _dataContext.Favorite.FirstOrDefault(f => f.user_id == idUser && f.product_id == idProduct);
        if (favoriteToRemove!=null)
        {
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
            _dataContext.Favorite?.Add(newFavorite);
            _dataContext.SaveChanges();
            return true;
        }
    }



}
