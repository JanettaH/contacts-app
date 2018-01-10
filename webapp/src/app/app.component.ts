import {Component} from '@angular/core';
import {PopupService} from './popup/popup/popup.service';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public result: any;

  constructor(private popupService: PopupService) {}

  public openDialog(){
    this.popupService.confirm('Confirm Popup', 'Are you sure you want to do this?').subscribe(res => this.result = res);
  }
}
