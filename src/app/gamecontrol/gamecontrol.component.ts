import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  // TODO need to output a property for odd and even properties to app
  @Output() oddNumberCreated = new EventEmitter<number>();
  @Output() evenNumberCreated = new EventEmitter<number>();
  //1. Odd
  odd = 1;

  //2. Even
  even = 0;

// TODO add a reference to set the interval of the game and to clear the interval

  constructor() {}

  ngOnInit(): void {
  }
  onStartGame(){

      this.odd +=2
      this.even+=2
      this.oddNumberCreated.emit(this.odd)
      this.evenNumberCreated.emit(this.even)

  }
   onEndGame(){
  }
}
