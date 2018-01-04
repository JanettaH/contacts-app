import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';
import {Location} from '@angular/common';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  private contactId;
  private editContact: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private contactService: ContactService, private location: Location) {
    this.contact = new Contact();
    this.contactId = 0;
    this.editContact = false;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parameters => {
      this.contactId = +parameters.get('id');
    });
    if (this.contactId != 0) {
      this.editContact = true;
      this.contactService.findContactById(this.contactId).subscribe(contact => {
        this.contact = contact;
      });
    }
  }

  onCreateContact() {
    // console.error(this.contact);
    if (this.editContact === true) {
      this.contactService.editContact(this.contact).subscribe(() => {
        this.router.navigate(['/ca/contact']);
      });

    } else {
      this.contactService.createContact(this.contact).subscribe(() => {
        this.router.navigate(['/ca/contact']);
      });
    }
  }

  onCancel() {
    this.router.navigate(['/ca/contact']);
  }
}
