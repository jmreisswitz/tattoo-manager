import { Component, OnInit } from '@angular/core';
import { Anamnese } from '../../../core/model/anamnese';
import { AnamneseService } from '../../../core/service/anamnese.service';
import { PdfGeneratorService } from '../../../core/service/pdf-generator.service';

@Component({
  selector: 'app-anamnese-dashboard',
  templateUrl: './anamnese-dashboard.component.html',
  styleUrls: ['./anamnese-dashboard.component.css'],
})
export class AnamneseDashboardComponent implements OnInit {
  searchTerm = '';
  anamneses: Anamnese[] = [];
  iframeSrc: any = 'about:blank';

  constructor(
    private anamneseService: AnamneseService,
    private pdfGeneratorService: PdfGeneratorService
  ) {}

  ngOnInit(): void {
    this.anamneseService
      .getAllAnamneses()
      .subscribe((anamneses) => (this.anamneses = anamneses));
  }

  downloadPdf(anamnese: Anamnese): void {
    this.pdfGeneratorService.generateAnamnesePdf(anamnese).then((blob) => {
      console.log('chegou os guri');
      this.iframeSrc = URL.createObjectURL(blob);
    });
  }
}
