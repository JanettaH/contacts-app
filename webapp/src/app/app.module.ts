import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {ContactLocalStorageService} from './contact/services/contact-local-storage.service';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {CovalentLayoutModule} from '@covalent/core';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {LoginComponent} from './user/login/login.component';
import {UserService} from './user/services/user.service';
import {AuthenticationService} from './user/services/authentication.service';
import {CaHttpInterceptor} from './config/ca-http-interceptor';
import {PopupComponent } from './popup/popup/popup.component';
import {PopupService} from './popup/popup/popup.service';
import { SignUpComponent } from './user/sign-up/sign-up/sign-up.component';
import { ToolbarComponent } from './layout/app-layout/toolbar/toolbar/toolbar.component';
import {ToolbarService} from './layout/app-layout/toolbar/toolbar/toolbar.service';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ca',
    component: AppLayoutComponent,
    children: [
      {
        path: 'contact',
        component: ContactListComponent
      },
      {
        path: 'contact-detail/:id',
        component: ContactDetailComponent
      },
      {
        path: 'add-contact',
        component: AddContactComponent
      },
      {
        path: 'contact-detail',
        component: ContactDetailComponent
      },
    ]
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
    AppLayoutComponent,
    LoginComponent,
    SignUpComponent,
    ToolbarComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    CovalentLayoutModule,
    FormsModule
  ],
  providers: [
    ContactHttpService,
    ContactService,
    ContactLocalStorageService,
    UserService,
    AuthenticationService,
    PopupService,
    ToolbarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CaHttpInterceptor,
      multi: true
    }
  ],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
