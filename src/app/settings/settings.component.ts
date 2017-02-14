import { Component, OnInit } from '@angular/core';
import { PROPERTY_LINES } from '../property-lines';
import { Text2propertyService } from "../text2property.service";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  propertyLines = PROPERTY_LINES;

  constructor(private text2propertyService: Text2propertyService ) {}

  ngOnInit(): void {
    this.getText();

  }

}

/* TODO keshirovanie dlya sravnenia novyh elementov v massivah */
