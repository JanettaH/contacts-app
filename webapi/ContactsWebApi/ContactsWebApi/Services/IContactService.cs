﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;

namespace ContactsWebApi.Services
{
    public interface IContactService
    {
        List<Contact>FindContacts();
        Contact FindContactById(int id);
        void CreateContact(Contact contact);
        void DeleteContact(int id);
        void EditContact(Contact contact);
    }
}
