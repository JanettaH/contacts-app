import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

const materialModules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  FormsModule,
  MatMenuModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialComponentsModule {
}

