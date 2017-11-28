using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsWebApi.Models
{
    public class Contact
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
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
