import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  title: string;
  contacts: Contact [];

  newContact: Contact;

  constructor(private contactService: ContactService, private router: Router) {
    this.title = 'Contact List';
    this.contacts = [];
    this.newContact = new Contact();
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

  onContactSelect(contact: Contact) {
    // this.contactSelected.emit(contact);
    console.log(contact);
    this.router.navigate(['/contact-detail', contact.id]);
  }

  addContact() {
    this.contactService.createContact(this.newContact);
  }

  onContactAdd() {
    // this.router.navigate(['/add-contact']);
    this.router.navigate(['/contact-detail', 0]);
  }

  showAddContact() {
    this.router.navigate(['/contact-list']);
  }
}
