import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  // TODO need to output a property for odd and even properties to app
  @Output() oddNumberCreated = new EventEmitter<{odd: number}>();
  @Output() evenNumberCreated = new EventEmitter<{even: number}> ();
  //1. Odd
  odd = 1;

  //2. Even
  even = 2;

// TODO add a reference to set the interval of the game and to clear the interval




  constructor() {}

  ngOnInit(): void {

  }
  onStartGame(){
    // TODO generate evens and odds on a set interval
    this.generateOddNumbers();
    this.generateEvenNumbers();
  }
   onEndGame(){
    // stop the interal
  }

  generateOddNumbers(){
    this.oddNumberCreated.emit({odd: this.odd})
  }

  generateEvenNumbers(){
    this.evenNumberCreated.emit({even: this.even})
  }
}
