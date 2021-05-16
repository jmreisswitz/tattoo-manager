interface IContactInformation {
  completeName: string;
  cpf: string;
  rg: string;
  birthDate: string;
  cep: string;
  phone: string;
  userAlias: string;
  email: string;
}

interface IClinicalInformation {
  cardiacProblem: boolean;
  easyBlooding: boolean;
  immunologicSystem: boolean;
  diabetes: boolean;
  dst: boolean;
  pregnant: boolean;
  highPressure: boolean;
  faintFrequently: boolean;
  allergy: boolean;
}

export interface IAnamnese {
  creationDate: string;
  contactInfo: IContactInformation;
  clinicalInfo: IClinicalInformation;
}

// class ContactInformation implements IContactInformation {
//   birthDate: string;
//   cep: string;
//   completeName: string;
//   cpf: string;
//   email: string;
//   id: number;
//   phone: string;
//   rg: string;
//   userAlias: string;
//
//   constructor(
//     birthDate: string,
//     cep: string,
//     completeName: string,
//     cpf: string,
//     email: string,
//     id: number,
//     phone: string,
//     rg: string,
//     userAlias: string
//   ) {
//     this.birthDate = birthDate;
//     this.cep = cep;
//     this.completeName = completeName;
//     this.cpf = cpf;
//     this.email = email;
//     this.id = id;
//     this.phone = phone;
//     this.rg = rg;
//     this.userAlias = userAlias;
//   }
// }

export class Anamnese implements IAnamnese {
  clinicalInfo: IClinicalInformation;
  contactInfo: IContactInformation;
  creationDate: string;

  constructor(
    contactInfo: IContactInformation,
    clinicalInfo: IClinicalInformation,
    creationDate: string
  ) {
    this.clinicalInfo = clinicalInfo;
    this.contactInfo = contactInfo;
    this.creationDate = creationDate;
  }

  public static getEmptyAnamnese(): Anamnese {
    return new Anamnese(
      {
        completeName: '',
        cpf: '',
        rg: '',
        birthDate: '',
        cep: '',
        phone: '',
        userAlias: '',
        email: '',
      },
      {
        cardiacProblem: false,
        easyBlooding: false,
        immunologicSystem: false,
        diabetes: false,
        dst: false,
        pregnant: false,
        highPressure: false,
        faintFrequently: false,
        allergy: false,
      },
      ''
    );
  }
}
