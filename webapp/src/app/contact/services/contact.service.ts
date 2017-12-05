import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class ContactService {

  constructor(private localStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService, private router: Router) {

  }

  findContacts(): Observable<Contact[]> {
    //return this.localStorage.findContacts()
    return this.contactHttpService.get();

  }

  findContactById(id: number) {
    return this.contactHttpService.getContactById(id);
  }

  createContact(contact: Contact) {
    return this.contactHttpService.create(contact);
  }

  deleteContact(id: number) {
    return this.contactHttpService.delete(id);
  }

  editContact(contact: Contact) {
    return this.contactHttpService.edit(contact);
  }
}
