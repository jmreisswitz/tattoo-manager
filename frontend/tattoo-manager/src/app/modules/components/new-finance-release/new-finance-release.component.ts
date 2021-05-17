import { Component, Inject, OnInit } from '@angular/core';
import {
  FinanceGroup,
  FinanceRelease,
  FinanceType,
} from '../../../core/model/finance-release';
import { FinanceReleaseService } from '../../../core/service/finance-release.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-finance-release',
  templateUrl: './new-finance-release.component.html',
  styleUrls: ['./new-finance-release.component.css'],
})
export class NewFinanceReleaseComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewFinanceReleaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private financeReleaseService: FinanceReleaseService
  ) {}
  expensesGroups = [
    FinanceGroup.INFRASTRUCTURE,
    FinanceGroup.MATERIAL,
    FinanceGroup.MARKETING,
    FinanceGroup.SOFTWARE,
    FinanceGroup.PERSONAL_DEVELOPMENT,
  ];
  revenueGroups = [
    FinanceGroup.TATTOO_JOB,
    FinanceGroup.DRAWING,
    FinanceGroup.COURSE,
    FinanceGroup.CONSULTANCY,
  ];
  releaseGroups = this.expensesGroups;

  releaseTypes = [FinanceType.EXPENSE, FinanceType.PROFIT];

  typeSelected: FinanceType | null = null;
  groupSelected: FinanceGroup | null = null;
  description: string | null = null;
  value: number | null = null;
  selectedDate: Date = new Date();

  ngOnInit(): void {}

  changeType(releaseType: string): void {
    this.typeSelected = releaseType as FinanceType;
    if (this.typeSelected === 'Despesa') {
      this.releaseGroups = this.expensesGroups;
    } else {
      this.releaseGroups = this.revenueGroups;
    }
    this.groupSelected = null;
  }

  changeGroup(releaseGroup: string): void {
    this.groupSelected = releaseGroup as FinanceGroup;
  }

  saveFinanceRelease(): void {
    if (
      this.description &&
      this.value &&
      this.groupSelected &&
      this.typeSelected
    ) {
      const release: FinanceRelease = {
        releaseDate: this.selectedDate,
        value: this.value,
        description: this.description,
        type: this.typeSelected,
        group: this.groupSelected,
      };
      this.financeReleaseService.sendFinanceRelease(release, 'vale');
    }
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
