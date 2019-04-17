import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [``],
})
export class AppComponent {

  logMessage(myInput) {
    console.log(myInput);
  }

}
