import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {PopupComponent} from './popup.component';

@Injectable()
export class PopupService {

  constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string):Observable<boolean> {

    let dialogRef: MatDialogRef<PopupComponent>;

    dialogRef = this.dialog.open(PopupComponent);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
    }
  }
