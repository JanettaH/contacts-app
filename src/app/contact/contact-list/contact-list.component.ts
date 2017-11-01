import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  title: string
  contacts: Contact [];
  @Output() contactSelected: EventEmitter<Contact>;

  newContact: Contact;

  constructor(private contactService: ContactService) {
    this.title = 'Contact List';
    this.contacts = [];
    this.contactSelected = new EventEmitter();
    this.newContact = new Contact();
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

  onContactSelect(contact: Contact) {
    this.contactSelected.emit(contact);
    console.log(contact);
  }

  addContact() {
    this.contactService.addContact(this.newContact);
  }
}
