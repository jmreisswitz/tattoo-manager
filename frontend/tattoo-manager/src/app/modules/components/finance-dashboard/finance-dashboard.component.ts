import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFinanceReleaseComponent } from '../new-finance-release/new-finance-release.component';
import { FinanceRelease } from '../../../core/model/finance-release';
import { FinanceReleaseService } from '../../../core/service/finance-release.service';

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

  constructor(
    private dialog: MatDialog,
    private financeReleaseService: FinanceReleaseService
  ) {}

  ngOnInit(): void {
    this.fetchFinanceReleases();
  }

  openNewFinanceDialog(): void {
    this.dialog.open(NewFinanceReleaseComponent, {
      width: '100%',
    });
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
    }
  }
}
