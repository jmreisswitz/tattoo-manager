interface ContactInformation {
  id: number;
  completeName: string;
  cpf: string;
  rg: string;
  birthDate: string;
  cep: string;
  phone: string;
  userAlias: string;
  email: string;
}

interface ClinicalInformation {
  id: number;
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

export interface Anamnese {
  userId: number;
  creationDate: string;
  contactInfo: ContactInformation;
  clinicalInfo: ClinicalInformation;
}
