import { Injectable } from '@angular/core';
import { IAnamnese } from '../model/anamnese';
import labelmake from 'labelmake';
// @ts-ignore
import templateJson from '../../../templates/anamnese-template.json';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  async generateAnamnesePdf(anamnese: IAnamnese): Promise<any> {
    const checkSign = 'X';
    const inputs = [
      {
        clientName: anamnese.contactInfo.completeName,
        cpf: anamnese.contactInfo.cpf,
        rg: anamnese.contactInfo.rg,
        birthDate: anamnese.contactInfo.birthDate,
        cep: anamnese.contactInfo.cep,
        phone: anamnese.contactInfo.phone,
        email: anamnese.contactInfo.email,
        cardTrue: anamnese.clinicalInfo.cardiacProblem ? checkSign : '',
        cardFalse: !anamnese.clinicalInfo.cardiacProblem ? checkSign : '',
        bloodTrue: anamnese.clinicalInfo.easyBlooding ? checkSign : '',
        bloodFalse: !anamnese.clinicalInfo.easyBlooding ? checkSign : '',
        immunoTrue: anamnese.clinicalInfo.immunologicSystem ? checkSign : '',
        immunoFalse: !anamnese.clinicalInfo.immunologicSystem ? checkSign : '',
        diabetesTrue: anamnese.clinicalInfo.diabetes ? checkSign : '',
        diabetesFalse: !anamnese.clinicalInfo.diabetes ? checkSign : '',
        dstTrue: anamnese.clinicalInfo.dst ? checkSign : '',
        dstFalse: !anamnese.clinicalInfo.dst ? checkSign : '',
        pregnantTrue: anamnese.clinicalInfo.pregnant ? checkSign : '',
        pregnantFalse: !anamnese.clinicalInfo.pregnant ? checkSign : '',
        pressureTrue: anamnese.clinicalInfo.highPressure ? checkSign : '',
        pressureFalse: !anamnese.clinicalInfo.highPressure ? checkSign : '',
        faintTrue: anamnese.clinicalInfo.faintFrequently ? checkSign : '',
        faintFalse: !anamnese.clinicalInfo.faintFrequently ? checkSign : '',
        allergyTrue: anamnese.clinicalInfo.allergy ? checkSign : '',
        allergyFalse: !anamnese.clinicalInfo.allergy ? checkSign : '',
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
    const pdf = await labelmake({ inputs, template, font });
    return new Blob([pdf.buffer], { type: 'application/pdf' });
  }
}
