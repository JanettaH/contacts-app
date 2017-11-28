import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactHttpService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:59001/api/contacts';
  }

  get(): Observable<Contact[]> {
    return this.http.get(this.url).map((response) => {
      return response as Contact [];
    });
  }
  //TO Create contact Observable
  create (contact: Contact) {
    return this.http.post(this.url, contact).subscribe();
  }
  delete(id: number){
    return this.http.delete(this.url + '/' + id).subscribe();
  }
  edit(contact: Contact){
    return this.http.put<Contact>(this.url, contact).subscribe();
  }
}
