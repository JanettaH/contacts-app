import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(1, 'First', 'Contact', '0407419558', 'Laserkatu 8', 'Lappeenranta')
    ];
  }

  getContacts(): Contact [] {
    return this.contacts;
  }

  addContact(conact: Contact) {
    this.contacts.push(Object.assign({}, conact));
  }
}
