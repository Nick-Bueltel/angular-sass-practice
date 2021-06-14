import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.sass']
})
export class BaseComponentComponent implements OnInit {
  textValue = "Click button for a random 6 digit number"


  constructor() { }

  ngOnInit(): void {
  }

  getIntRandom() {
    return Math.floor(Math.random() * 9)
  }

  GenerateSixDigit() {
    var integers = []
    for(var i = 0; i < 6; i++) {
      integers.push(this.getIntRandom())
    }
    return integers.join(``);
    
  }
  updateText() {
    this.textValue = this.GenerateSixDigit();
  }

}
