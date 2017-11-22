import {Component, OnInit} from '@angular/core';
import {_document} from '@angular/platform-browser/src/browser';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactLocalStorageService} from '../services/contact-local-storage.service';

@Component({
  selector: 'ca-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  city: string;

  contact: Contact

  constructor(private router: Router, private ContactService: ContactLocalStorageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
