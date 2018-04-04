import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCard, MatCardModule, MatCheckboxModule, MatCommonModule, MatDialogModule, MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';

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
  MatMenuModule,
  MatDialogModule,
  LayoutModule,
  MatCommonModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatCardModule,

];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialComponentsModule {
}

