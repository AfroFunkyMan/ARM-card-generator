import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  constructor() {
  }

  values = "";
  onKey(event: KeyboardEvent) {
    this.values = (<HTMLInputElement>event.target).value;
    let areaValue = this.values;
    this.onMatch(areaValue);
    console.log(areaValue);
    return(areaValue);
  }

  onMatch(areaValue) {
    let anchor = areaValue.match(/\{([a-zA-Z]+)\}/g);
    console.log(anchor);
  }

  ngOnInit() {
  }

}
