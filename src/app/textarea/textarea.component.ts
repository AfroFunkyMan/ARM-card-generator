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
    //text2property.service.getData(event || event.target.value)
    let areaValue = this.values = (<HTMLInputElement>event.target).value;
    this.onMatch(areaValue);
  }

  onMatch(areaValue) {
    let anchor = areaValue.match(/\{([a-zA-Z]+)\}/g);
    console.log(anchor);
    // call the save service method
    return anchor;
  }



  ngOnInit() {
  }

}
