namespace API.DTOs
{
    public class MemberDto
    {
        // Adding a [Key] indicates that the variable below is the primary key.
        public int Id { get; set; }

        // Adding a ? next to the data type, it initiates it as optional.
        public string UserName { get; set; }
        public string PhotoUrl { get; set; }

        public int Age { get; set; }

        public string KnownAs { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public string Gender { get; set; }

        public string Introduction { get; set; }

        public string LookingFor { get; set; }

        public string Interests { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public List<PhotoDto> Photos { get; set; }
    }
}