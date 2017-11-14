import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';

@Injectable()
export class ContactService {

  private contacts: Contact[];

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
      let ids = this.contacts.map(c => c.id);
      console.log(ids);
      let maxId = Math.max(...ids);
      console.log('Max id: ' + maxId);
      // this.contacts.push(Object.assign({}, contact));
      contactId = maxId + 1;
    }
    contact.id = contactId;
    this.contacts.push(Object.assign({}, contact));
  }
    deleteContact(contact: Contact) {
    let index = this.contacts.findIndex(c => c.id === contact.id);
    console.log('Index: ' + index);
  }
}
