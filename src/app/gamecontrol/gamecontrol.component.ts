import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  // Setting the interval
  @Output()intervalFired = new EventEmitter<number>();
  interval : any;
  lastNumber = 0;

  constructor() {}

  ngOnInit(): void {

  }
  onStartGame(){
    // TODO generate evens and odds on a set interval
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000)

  }
   onEndGame(){
    clearInterval(this.interval);
  }

}
