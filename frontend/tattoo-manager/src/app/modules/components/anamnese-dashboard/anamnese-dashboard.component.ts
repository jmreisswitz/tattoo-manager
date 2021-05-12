import { Component, OnInit } from '@angular/core';
import { Anamnese } from '../../../core/model/anamnese';
import { AnamneseService } from '../../../core/service/anamnese.service';

@Component({
  selector: 'app-anamnese-dashboard',
  templateUrl: './anamnese-dashboard.component.html',
  styleUrls: ['./anamnese-dashboard.component.css'],
})
export class AnamneseDashboardComponent implements OnInit {
  searchTerm = '';
  anamneses: Anamnese[] = [];

  constructor(private anamneseService: AnamneseService) {}

  ngOnInit(): void {
    this.anamneseService
      .getAllAnamneses()
      .subscribe((anamneses) => (this.anamneses = anamneses));
  }
}
