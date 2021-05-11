import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BudgetRequestService } from '../../../core/service/budget-request.service';

interface SideNavOption {
  icon: string;
  text: string;
  componentPath: string;
  highlight: boolean;
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
  userAlias: string | null = 'vale';
  newBudgetRequestsCount: number | never[] = 0;

  constructor(private budgeRequestService: BudgetRequestService) {}

  sideNavOptionList: SideNavOption[] = [
    {
      icon: 'home',
      text: 'Página inicial',
      componentPath: '',
      highlight: false,
    },
    {
      icon: 'shopping_cart',
      text: 'Pedidos de orçamento',
      componentPath: 'budget',
      highlight: false,
    },
    {
      icon: 'calendar_today',
      text: 'Agenda',
      componentPath: 'calendar',
      highlight: false,
    },
    {
      icon: 'description',
      text: 'Anamnese',
      componentPath: 'anamnese',
      highlight: false,
    },
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

  setBudgetTextNotification(): void {
    if (!this.newBudgetRequestsCount || this.newBudgetRequestsCount === 0) {
      this.sideNavOptionList[1].highlight = false;
      return;
    }
    const budgetText = this.sideNavOptionList[1].text;
    this.sideNavOptionList[1].text =
      budgetText + ' (' + this.newBudgetRequestsCount + ')';
    this.sideNavOptionList[1].highlight = true;
  }

  ngOnInit(): void {
    if (this.userAlias) {
      this.budgeRequestService
        .getTotalOfNewBudgetRequests(this.userAlias)
        .subscribe((totalNewBudgetRequests) => {
          this.newBudgetRequestsCount = totalNewBudgetRequests;
          this.setBudgetTextNotification();
        });
    }
  }
}
