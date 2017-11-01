import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact('First', 'Contact')
    ];
  }

  getUsers(): Contact [] {
    return this.contacts;
  }

  addContact(conact: Contact) {
    this.contacts.push(Object.assign({}, conact));
  }
}
