import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Menu } from './menu';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuOpen', [
      state(
        'open',
        style({
          width: '50rem',
          boxShadow: '2px 2px 4px #7c7c7e'
        })
      ),
      state(
        'close',
        style({
          width: '3rem',
        })
      ),
      transition('close => open', [animate('0.15s')]),
      transition('open => close', [animate('0.1s')]),
    ]),
  ]
})
export class MenuComponent implements OnInit {

  isOpen: boolean;
  contents = Menu.contents;

  constructor() { }

  ngOnInit() {
    this.isOpen = false;
  }

  click() {
    this.isOpen = !this.isOpen;
  }
}
