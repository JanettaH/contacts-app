using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.Azure.KeyVault.Models;
using Contact = ContactsWebApi.Models.Contact;

namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly ContactContext _context;

        public ContactRepository(ContactContext context)
        {
            _context = context;
        }

        public List<Contact> GetAll()
        {
            return _context.Contacts.ToList();

        }

        public Contact GetById(int id)
        {
            return _context.Contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();
        }


        public void DeleteById (int id)
        {
            var contact =_context.Contacts.FirstOrDefault(c => c.Id == id);
            _context.Contacts.Remove(contact);
            _context.SaveChanges();
        }

        public void EditById(Contact contact)
        {
            _context.Contacts.Update(contact);
            _context.SaveChanges();
        }
    }
}
