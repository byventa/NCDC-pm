import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Table', routerLink: '/table' },
      { label: 'Form', routerLink: '/form' },
    ];
  }
}
