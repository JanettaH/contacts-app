import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../contact/contact';
import {MatSidenav} from '@angular/material';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'ca-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {

  smallScreenQuery = '(max-width: 5999)';
  isSmallScreen: boolean;
  @ViewChild('sidenav') sidenav: MatSidenav;
  selectedContact: string;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, activatedRoute: ActivatedRoute) {
    this.isSmallScreen = breakpointObserver.isMatched(this.smallScreenQuery);
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      this.smallScreenQuery
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
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
