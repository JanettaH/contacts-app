import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {PopupComponent} from './popup.component';
import {PopupService} from './popup.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [PopupComponent],
  exports: [PopupComponent],
  providers: [PopupService]
})
export class PopupModule { }
