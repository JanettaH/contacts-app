import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  deleteContact() {
    this.contactService.deleteContact(this.contact.id);
    this.router.navigate(['/contact']);
  }
  onEditContact() {
    this.contactService.editContact(this.contact);
    this.router.navigate(['/']);
  }
}
