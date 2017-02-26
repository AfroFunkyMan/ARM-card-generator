import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  max = 100;
  count = 10;
  cards = [
    {
      name: '#1',
      text: 'qwe',
      value: 2,
      max: 5
    }
  ];


  onKey(card, value) {
    card.text = value;
    let count = card.text.split(/\n/ig);
    count = count.filter(text => text != '');
    card.max = count.length;
  }

  setNewValue(card, event) {
    console.log(event);
  }

  setCount(event) {
    console.log(event);
  }


  download() {
    let strings = '';
    for (let i = 0; i <= this.count; i++) {
      strings+=this.createRow()+'\n';
    }
    var blob = new Blob([strings], {type: 'text/csv'});
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  createRow() : string {
    let _this = this;
    let result = this.cards.reduce(function (sum, current, index, array) {
      return sum + `"${_this.calculate(current)}";`
    },'');
    return result;
  }


  calculate(card): void {
    let words = card.text.split(/\n/ig);
    words = words.filter(text => text != '');
    words.sort(this.randomSort);
    words = words.slice(words.length - card.value);
    return words = words.reduce(function(sum, current, index) {
      if (index === words.length-1) return sum + current;
      else return sum + current+ ', ';
    }, '');

  }

  addNewCard(event) {
    this.cards.push({
      name: `#${this.cards.length + 1}`,
      text: '',
      value: 1,
      max: 1
    });
  }

  deleteThisCard(thisCard) {
    if (thisCard.name != '#1') {
      this.cards = this.cards.filter(card => card != thisCard);
    }
  }


  randomSort(a, b) {
    if (Math.random() > 0.5) return -1;
    else return 1;
  }
}
