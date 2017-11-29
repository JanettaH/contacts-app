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
        private List<Contact> _contacts;
        private ContactContext _context;

        public ContactRepository(ContactContext context)
        {
            _contacts = new List<Contact>();
            _context = context;
            Initialize();
        }

        public List<Contact> GetAll()
        {
            //return _contacts;
            return _context.Contacts.ToList();
        }

        public Contact GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Create(Contact contact)
        {
            if (_contacts.Count > 0)
                contact.Id = _contacts.Max(c => c.Id) + 1;
            else
                contact.Id = 0 + 1;
            _contacts.Add(contact);
        }


        public void DeleteById (int id)
        {
            var contact =_contacts.FirstOrDefault(c => c.Id == id);
            _contacts.Remove(contact);
        }

        public void EditById(Contact contact)
        {
            int index = _contacts.FindIndex(c => c.Id == contact.Id);
            _contacts[index] = contact;
           /* _contacts.Remove(contact);
            _contacts.Add(contact);*/
        }

        private void Initialize()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Janetta", "Huobonen", "040123456", "Skinnarilankatu 1", "Lappeenranta"),
                new Contact(2, "Toinen", "Henkilo", "040756816", "Skinnarilankatu 16", "Lappeenranta"),
            };
        }
    }
}
