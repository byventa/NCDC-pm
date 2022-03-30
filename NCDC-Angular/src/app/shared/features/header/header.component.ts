import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
