import { Injectable } from '@angular/core';
import { Anamnese } from '../model/anamnese';
import labelmake from 'labelmake';
// @ts-ignore
import templateJson from '../../../templates/anamnese-template.json';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  async generateAnamnesePdf(anamnese: Anamnese): Promise<any> {
    const inputs = [
      {
        clientName: anamnese.contactInfo.completeName,
        cpf: anamnese.contactInfo.cpf,
      },
    ];
    const font = {};
    const template = {
      schemas: templateJson.schemas.map((schemas: any) => {
        return { schemas } as const;
      }),
      basePdf: templateJson.basePdf,
    };
    console.log(template);
    const pdf = await labelmake({ inputs, template, font });
    return new Blob([pdf.buffer], { type: 'application/pdf' });
  }
}
