import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatMenuTrigger, MatSidenavModule, MatSliderModule,
  MatToolbar, MatToolbarModule,
} from '@angular/material';
import {ContactService} from './contact/services/contact.service';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent } from './contact/add-contact/add-contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { CovalentLayoutModule} from '@covalent/core';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  },
  {
    path: 'contact',
    component: ContactListComponent
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactListItemComponent,
    AddContactComponent,
    ContactDetailComponent,
    ContactAddressPipe,
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    CovalentLayoutModule
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static FlexLayoutMondule: any;
}
