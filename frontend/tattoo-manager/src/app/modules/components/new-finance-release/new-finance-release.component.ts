import { Component, OnInit } from '@angular/core';
import { FinanceRelease } from '../../../core/model/finance-release';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-finance-release',
  templateUrl: './new-finance-release.component.html',
  styleUrls: ['./new-finance-release.component.css'],
})
export class NewFinanceReleaseComponent implements OnInit {
  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  expensesGroups = [
    'Infraestrutura',
    'Material',
    'Marketing',
    'Softwares',
    'Desenvolvimento pessoal',
  ];
  revenueGroups = ['Tatuagem', 'Venda de desenhos', 'Cursos', 'Consultoria'];
  releaseGroups = this.expensesGroups;

  releaseTypes = ['Despesa', 'Receita'];

  typeSelected: string | null = null;
  groupSelected: string | null = null;
  description: string | null = null;
  value: number | null = null;

  constructor() {}
  ngOnInit(): void {}

  changeType(releaseType: string): void {
    this.typeSelected = releaseType;
    if (this.typeSelected === 'Despesa') {
      this.releaseGroups = this.expensesGroups;
    } else {
      this.releaseGroups = this.revenueGroups;
    }
  }

  changeGroup(releaseGroup: string): void {
    this.groupSelected = releaseGroup;
  }

  saveFinanceRelease(): void {
    if (
      this.description &&
      this.value &&
      this.groupSelected &&
      this.typeSelected
    ) {
      const release: FinanceRelease = {
        value: this.value,
        description: this.description,
        type: this.typeSelected,
        group: this.groupSelected,
      };
      console.log(release);
    }
  }

  closeDialog(): void {}
}
