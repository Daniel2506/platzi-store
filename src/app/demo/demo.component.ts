import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


  title = 'platzi-store';

  items = ['Item', 'Item', 'Rodriguez'];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push('Item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
