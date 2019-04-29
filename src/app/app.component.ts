import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProgressIndicatorService } from './progress-indicator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:[ProgressIndicatorService]
})
export class AppComponent implements OnInit, OnDestroy{

  subscription: Subscription;
  notification: String;
  @ViewChild("basicModal") basicModal;

  constructor(private progress : ProgressIndicatorService){

  }

  ngOnInit(): void {
    this.subscription = this.progress.getStatus().subscribe(data => {
      this.notification = data
      if(data){
        this.basicModal.show();
      }else{
        this.basicModal.hide();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  show():void{
    this.basicModal.show();
    console.log("here");
    
  }

  logMessage(myInput) {
    console.log(myInput);
  }

}
