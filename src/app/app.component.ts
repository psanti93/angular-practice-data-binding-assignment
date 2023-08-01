import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // TODO we need to pass this as inputs to the odd and even components
 evenNumbers: number[] = [];
 oddNumbers: number[] = [];

  onIntervalFired(firedNumber: number){
    if (firedNumber %2 == 0) {
       this.evenNumbers.push(firedNumber);
    } else{
      this.oddNumbers.push(firedNumber);
    }
  }

}

