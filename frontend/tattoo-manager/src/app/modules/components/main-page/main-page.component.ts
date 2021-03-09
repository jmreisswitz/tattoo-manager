import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

interface SideNavOption {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;

  sideNavOptionList: SideNavOption[] = [
    { icon: 'home', text: 'Página inicial' },
    { icon: 'shopping_cart', text: 'Pedidos de orçamento' },
    { icon: 'calendar_today', text: 'Agenda' },
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
