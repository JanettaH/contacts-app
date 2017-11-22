import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }
  deleteContactById() {
    this.contactService.deleteContact(this.contact.id);
    this.router.navigate(['/contact']);
  }
  onEditContact() {
   // this.contactService.editContact(this.contact);
    this.router.navigate(['/']);
  }
}
