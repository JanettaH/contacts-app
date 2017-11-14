import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Location} from '@angular/common';

@Component({
  selector: 'ca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private contactService: ContactService, private location: Location) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parameters => {
      const contactId = +parameters.get('id');
      console.log(typeof (contactId));
      console.log('contact-detail : contactId: ' + contactId);
    });
  }

  onCreateContact() {
    // console.error(this.contact);
    this.contactService.createContact(this.contact);
    this.router.navigate(['/contact']);
  }

  onCancel() {
    this.router.navigate(['/contact']);
  }
}
