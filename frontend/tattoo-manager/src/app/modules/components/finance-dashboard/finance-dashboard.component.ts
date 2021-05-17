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
  displayedColumns: string[] = ['Data', 'Tipo', 'Grupo', 'Valor', 'Descrição'];
  financeReleaseList: FinanceRelease[] = [];

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
      .subscribe(
        (financeReleaseList) => (this.financeReleaseList = financeReleaseList)
      );
  }
}
