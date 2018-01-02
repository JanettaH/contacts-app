import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../contact/contact';


@Component({
  selector: 'ca-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {

  selectedContact: string;

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
  }

  showContactList() {
    this.router.navigate(['/contact']);
  }

  showAddContact() {
    this.router.navigate(['/add-contact']);
  }

  onContactSelected(contact: Contact) {
    console.log(contact);
    this.selectedContact = contact.firstName + ' ' + contact.lastName;
  }

}
