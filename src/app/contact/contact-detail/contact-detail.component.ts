import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parameters => {
      const contactId = +parameters.get('id');
      console.log(typeof (contactId));
      console.log('contact-detail : contactId: ' + contactId);
    });
  }
}
