import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import * as _ from 'lodash';
import {_MatHeaderCell} from '@angular/material';

@Injectable()
export class ContactLocalStorageService {

  localStorageKey: string;
  public contacts: Contact[];

  constructor() {
    this.localStorageKey = 'ca-contacts';
    this.initializeLocalStorage();
    const contacts = [
        new Contact(1, 'First', 'Contact', '0407419558', 'Laserkatu 8', 'Lappeenranta'),
        new Contact(2, 'Second', 'Contact', '0407419559', 'Laserkatu 15', 'Lappeenranta')
      ];
    this.writeLocalStorageContacts(contacts);
  }

  public findContacts(): Contact[] {
    return this.readLocalStorageContacts();
  }

  public findContactById(id: number): Contact {
    const contacts = this.readLocalStorageContacts();
    return _.find(contacts, {'id': id});
  }

  public createContact(contact: Contact) {
    const contacts: Contact[] = this.readLocalStorageContacts();
    const ids = contacts.map(c => c.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    const newId = maxId + 1;

    contact.id = newId;

    contacts. push(contact);

    this.writeLocalStorageContacts(contacts);
  }
  public editContact(contact: Contact) {
    const index = _.findIndex(this.contacts, c => c.id === contact.id);
    this.contacts[index] = contact;
  }

  public deleteContact(id: number) {
    const index: number = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(index, 1);
    this.writeLocalStorageContacts(this.contacts);
  }

  public initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }
  }

  public readLocalStorageContacts(): Contact[] {
    const data = localStorage.getItem(this.localStorageKey);
    return JSON.parse(data) as Contact[];
  }

  public writeLocalStorageContacts(contacts) {
    const data = JSON.stringify(contacts);
    localStorage.setItem(this.localStorageKey, data);
  }
}
