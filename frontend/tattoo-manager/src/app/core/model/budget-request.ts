export interface IBudgetRequest {
  clientName: string;
  birth: string;
  description: string;
  bodyPart: string;
  sizeInCm: number;
  phone: string;
  userAlias: string;
}

export class BudgetRequest implements IBudgetRequest {
  clientName: string;
  birth: string;
  description: string;
  bodyPart: string;
  sizeInCm: number;
  phone: string;
  userAlias: string;

  constructor(
    clientName: string,
    birth: string,
    description: string,
    bodyPart: string,
    sizeInCm: number,
    phone: string,
    userAlias?: string | null
  ) {
    this.clientName = clientName;
    this.birth = birth;
    this.description = description;
    this.bodyPart = bodyPart;
    this.sizeInCm = sizeInCm;
    this.phone = phone;
    this.userAlias = userAlias ? userAlias : '';
  }

  setUserAlias(userAlias: string): void {
    this.userAlias = userAlias;
  }
}
