import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../contact';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContactHttpService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.endpointUrl + 'contacts';
  }

  get(): Observable<Contact[]> {
    return this.http.get(this.url).map((response) => {
      return response as Contact [];
    });
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get(this.url + '/' + id).map((response) => {
      return response as Contact;
    });
  }

  //TO Create contact Observable
  create(contact: Contact): Observable<Contact> {
    return this.http.post(this.url, contact).map(contact => {
      return contact as Contact;
    });
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  edit(contact: Contact) {
    return this.http.put(this.url + '/' + contact.id, contact).map((response) => {
      return response as Contact;
    });
  }
}
