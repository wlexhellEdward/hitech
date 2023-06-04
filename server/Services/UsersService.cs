
public class UserService
{
    private EF_DataContext _dataContext;
    public UserService(EF_DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    public List<Users>? GetAllUsers()
    {   
        List<Users>? allUsers = _dataContext.Users?.ToList();
        return allUsers;
    }


    
}
