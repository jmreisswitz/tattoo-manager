import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewFinanceReleaseComponent } from '../new-finance-release/new-finance-release.component';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css'],
})
export class FinanceDashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openNewFinanceDialog(): void {
    this.dialog.open(NewFinanceReleaseComponent, {
      width: '100%',
    });
  }
}
