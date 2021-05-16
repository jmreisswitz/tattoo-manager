import { Component, OnInit } from '@angular/core';
import { Anamnese } from '../../../core/model/anamnese';
import { AnamnesePdfDialogComponent } from '../anamnese-pdf-dialog/anamnese-pdf-dialog.component';
import { PdfGeneratorService } from '../../../core/service/pdf-generator.service';
import { MatDialog } from '@angular/material/dialog';
import { AnamneseService } from '../../../core/service/anamnese.service';

@Component({
  selector: 'app-new-anamnese',
  templateUrl: './new-anamnese.component.html',
  styleUrls: ['./new-anamnese.component.css'],
})
export class NewAnamneseComponent implements OnInit {
  anamnese: Anamnese = Anamnese.getEmptyAnamnese();

  constructor(
    private pdfGeneratorService: PdfGeneratorService,
    private anamneseService: AnamneseService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  generateAnamnese(): void {
    this.openPdfDialog();
    this.createOnRepository();
  }

  private createOnRepository(): void {
    this.anamnese.setCreationAsNow();
    this.anamneseService.createAnamnese(this.anamnese, 'vale');
  }

  private openPdfDialog(): void {
    this.pdfGeneratorService.generateAnamnesePdf(this.anamnese).then((blob) => {
      this.dialog.open(AnamnesePdfDialogComponent, {
        width: '100%',
        data: URL.createObjectURL(blob),
      });
    });
  }
}
