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
        rg: anamnese.contactInfo.rg,
        birthDate: anamnese.contactInfo.birthDate,
        cep: anamnese.contactInfo.cep,
        phone: anamnese.contactInfo.phone,
        email: anamnese.contactInfo.email,
      },
    ];
    const font = {};
    const template = {
      schemas: templateJson.schemas.map((schemas: any) => {
        for (const [key] of Object.entries(schemas)) {
          schemas[key].type = 'text' as const;
        }
        return schemas;
      }),
      basePdf: templateJson.basePdf,
    };
    console.log(template);
    const pdf = await labelmake({ inputs, template, font });
    return new Blob([pdf.buffer], { type: 'application/pdf' });
  }
}
