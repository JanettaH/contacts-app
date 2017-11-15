import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';

@Injectable()
export class ContactService {

  public contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'First', 'Contact', '0407419558', 'Laserkatu 8', 'Lappeenranta'),
      new Contact(2, 'Second', 'Contact', '0407419559', 'Laserkatu 15', 'Lappeenranta')
    ];
  }

  public getContacts(): Contact [] {
    return this.contacts;
  }

  public createContact(contact: Contact) {
    console.error(contact);
    console.log(this.contacts);
    let contactId;
    if (this.contacts.length === 0) {
      contactId = 1;
    } else {
      const ids = this.contacts.map(c => c.id);
      console.log(ids);
      const maxId = Math.max(...ids);
      console.log('Max id: ' + maxId);
      contactId = maxId + 1;
    }
    contact.id = contactId;
    this.contacts.push(Object.assign({}, contact));
  }
  public deleteContact(id: number) {
    const index: number = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(index, 1);
  }
  public editContact (contact: Contact) {
    const index: number = this.contacts.findIndex(c => c.id === contact.id);
    contact[index] = contact;
    return this.contacts;
  }
}
