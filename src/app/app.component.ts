import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <input #myInput type="text">
      <button (click)="logMessage(myInput)">Click Me!</button>
  `,
  styles: [``],
})
export class AppComponent {

  logMessage(myInput) {
    console.log(myInput);
  }
  
}
