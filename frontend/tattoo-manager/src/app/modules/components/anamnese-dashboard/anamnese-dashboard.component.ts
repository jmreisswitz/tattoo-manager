import { Component, OnInit } from '@angular/core';
import { Anamnese } from '../../../core/model/anamnese';
import { AnamneseService } from '../../../core/service/anamnese.service';
import { PdfGeneratorService } from '../../../core/service/pdf-generator.service';
import { MatDialog } from '@angular/material/dialog';
import { AnamnesePdfDialogComponent } from '../anamnese-pdf-dialog/anamnese-pdf-dialog.component';

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
    private pdfGeneratorService: PdfGeneratorService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.anamneseService
      .getAllAnamneses()
      .subscribe((anamneses) => (this.anamneses = anamneses));
  }

  openPdfDialog(anamnese: Anamnese): void {
    this.pdfGeneratorService.generateAnamnesePdf(anamnese).then((blob) => {
      this.dialog.open(AnamnesePdfDialogComponent, {
        width: '100%',
        data: URL.createObjectURL(blob),
      });
    });
  }
}
