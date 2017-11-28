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

        public ContactRepository()
        {
            _contacts = new List<Contact>();
            Initialize();
        }

        public List<Contact> GetAll()
        {
            return _contacts;
        }

        public Contact GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Create(Contact contact)
        {
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
            _contacts.Remove(contact);
            _contacts.Add(contact);
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
