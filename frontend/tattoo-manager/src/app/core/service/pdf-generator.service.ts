import { Injectable } from '@angular/core';
import { Anamnese } from '../model/anamnese';
import labelmake from 'labelmake';
import templateJson from '../../../templates/anamnese-template.json';
import TemplateType from 'labelmake';
import { TemplateSchema } from 'labelmake/dist/types/type';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor() {}

  //   export interface Template {
  //   schemas: { [key: string]: TemplateSchema }[];
  //   basePdf: PageSize | string | Uint8Array | ArrayBuffer;
  //   fontName?: string;
  // }

  async generateAnamnesePdf(anamnese: Anamnese): Promise<any> {
    const inputs = [
      {
        clientName: anamnese.contactInfo.completeName,
        cpf: anamnese.contactInfo.cpf,
      },
    ];
    const font = {};
    const template = {
      // {
      schemas:
        //   field1: {
        //     position: { x: 20, y: 20 },
        //     width: 50,
        //     height: 50,
        //     // fontSize: 30,
        //     type: 'text',
        //   },
        // } as const,
        templateJson.schemas.map((schemas: any) => {
          // console.log('count: ' + count);
          // count++;
          // console.log(schemas);
          // for (const [key] of Object.entries(schemas)) {
          //   // schemas[key].type = TemplateType(schemas[key].type);
          //   // schemas[key] = schemas[key] as const;
          // }
          return { schemas } as const;
        }),
      basePdf: templateJson.basePdf,
    };
    console.log(template);
    const pdf = await labelmake({ inputs, template, font });
    return new Blob([pdf.buffer], { type: 'application/pdf' });
  }
}
