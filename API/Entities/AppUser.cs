

namespace API.Entities
{
    public class AppUser
    {
        // Adding a [Key] indicates that the variable below is the primary key.
        public int Id { get; set; }

        // Adding a ? next to the data type, it initiates it as optional.
        public string UserName {get; set;}

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}
