namespace ContactsWebApi.Models
{
    public class AuthenticationRequest
    {
        public string UserName { get; set; }
        public string Password { get; set; }


        public AuthenticationRequest(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }
    }
}