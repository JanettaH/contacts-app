import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from './contact/contact';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
