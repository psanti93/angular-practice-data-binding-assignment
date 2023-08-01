import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // TODO we need to pass this as inputs to the odd and even components
 evenNumber = 0
 oddNumber = 0

  oddNumberGenerated(odd:number){
     this.oddNumber = odd;
  }

  evenNumberGenerated(even: number){
    this.evenNumber= even
  }
}

