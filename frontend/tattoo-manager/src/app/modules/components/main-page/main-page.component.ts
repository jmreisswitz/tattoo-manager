import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

interface SideNavOption {
  icon: string;
  text: string;
  componentPath: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  isShowing = false;

  sideNavOptionList: SideNavOption[] = [
    { icon: 'home', text: 'Página inicial', componentPath: '' },
    {
      icon: 'shopping_cart',
      text: 'Pedidos de orçamento',
      componentPath: 'budget',
    },
    { icon: 'calendar_today', text: 'Agenda', componentPath: 'calendar' },
  ];

  mouseEnter(): void {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseLeave(): void {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  ngOnInit(): void {}
}
