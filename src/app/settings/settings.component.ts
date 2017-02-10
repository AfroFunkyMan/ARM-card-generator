import { Component, OnInit } from '@angular/core';

export class PropertyLine {
  id: number;
  name: string;
  keywords: Array<string>;
  amount: number;
}

const PROPERTY_LINES: PropertyLine[] = [
  {id: 1, name: "qwe", keywords: ["word1","word2","word3"], amount: 4},
  {id: 2, name: "qwe", keywords: ["word1","word2","word3"], amount: 4},
  {id: 3, name: "qwe", keywords: ["word1","word2","word3"], amount: 4},
  {id: 4, name: "qwe", keywords: ["word1","word2","word3"], amount: 4},
];

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  test = "tivmb";


/** TODO
 metod keyup prochitat' i protestirovat' +
 metod match dlya znacheniya, protestirovat' skobochki +
 privyazka k dlinne massiva
 keshirovanie dlya sravnenia novyh elementov v massivah
 izbavitsya ot knopok udaleniya+
 */

  propertyLines = PROPERTY_LINES;

  constructor() { }

  ngOnInit() {

  }

}
