import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFinanceReleaseComponent } from '../new-finance-release/new-finance-release.component';
import { FinanceRelease } from '../../../core/model/finance-release';
import { FinanceReleaseService } from '../../../core/service/finance-release.service';

interface Balance {
  revenue: number;
  expenses: number;
  total: number;
}

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css'],
})
export class FinanceDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'releaseDate',
    'type',
    'group',
    'value',
    'description',
  ];
  financeReleaseList: FinanceRelease[] = [];
  filteredReleasesList: FinanceRelease[] = [];
  dateFrom: Date | null = null;
  dateUntil: Date | null = null;
  balance: Balance = {
    revenue: 0,
    expenses: 0,
    total: 0,
  };

  constructor(
    private dialog: MatDialog,
    private financeReleaseService: FinanceReleaseService
  ) {}

  ngOnInit(): void {
    this.fetchFinanceReleases();
  }

  updateBalance(): void {
    this.balance.revenue = this.filteredReleasesList
      .filter((it) => it.value > 0)
      .map((it) => it.value)
      .reduce((firstNumber, secondNumber) => firstNumber + secondNumber, 0);
    this.balance.expenses = this.filteredReleasesList
      .filter((it) => it.value < 0)
      .map((it) => it.value)
      .reduce((firstNumber, secondNumber) => firstNumber + secondNumber, 0);
    this.balance.total = this.balance.revenue + this.balance.expenses;
  }

  openNewFinanceDialog(): void {
    this.dialog.open(NewFinanceReleaseComponent);
  }

  fetchFinanceReleases(): void {
    this.financeReleaseService
      .getAllByUserAlias('vale')
      .subscribe((financeReleaseList) => {
        this.financeReleaseList = financeReleaseList;
        this.financeReleaseList.forEach((it) =>
          this.financeReleaseService.enumStringToString(it)
        );
        this.filteredReleasesList = financeReleaseList;
        this.updateBalance();
      });
  }

  filterReleases(): void {
    if (!(this.dateUntil && this.dateFrom)) {
      return;
    } else {
      this.filteredReleasesList = this.financeReleaseList.filter(
        (release) =>
          // @ts-ignore
          release.releaseDate >= this.dateFrom?.toJSON() &&
          // @ts-ignore
          release.releaseDate <= this.dateUntil?.toJSON()
      );
      this.updateBalance();
    }
  }
}
