export interface IBudgetRequest {
  clientName: string;
  age: number;
  description: string;
  bodyPart: string;
  sizeInCm: number;
  phone: string;
  userAlias: string;
}

export class BudgetRequest implements IBudgetRequest {
  clientName: string;
  age: number;
  description: string;
  bodyPart: string;
  sizeInCm: number;
  phone: string;
  userAlias: string;

  constructor(
    clientName: string,
    age: number,
    description: string,
    bodyPart: string,
    sizeInCm: number,
    phone: string,
    userAlias?: string | null
  ) {
    this.clientName = clientName;
    this.age = age;
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
