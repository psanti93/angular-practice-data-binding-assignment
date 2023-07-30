import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // TODO we need to pass this as inputs to the odd and even components
 evenNumber = 0;
 oddNumber = 0;

  oddNumberGenerated(oddData: {odd:number}){
     this.oddNumber = oddData.odd;
  }

  evenNumberGenerated(evenData: {even: number}){
    this.evenNumber = evenData.even;
  }
}

