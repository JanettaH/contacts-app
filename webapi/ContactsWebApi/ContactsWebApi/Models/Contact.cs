using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsWebApi.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string City { get; set; }

        public Contact(int id, string fristName, string lastName, string phoneNumber, string address, string city)
        {
            Id = id;
            FirstName = fristName;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            Address = address;
            City = city;
        }
    }
}
