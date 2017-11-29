using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ContactsWebApi.Models
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options)
            : base(options)
        { }

        public DbSet<Contact> Contacts { get; set; }

    }
}