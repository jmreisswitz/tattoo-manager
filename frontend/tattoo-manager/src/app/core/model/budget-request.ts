export interface IBudgetRequest {
  clientName: string;
  age: number;
  description: string;
  bodyPart: string;
  sizeInCm: number;
  phone: string;
  userAlias: string;
  isNew: boolean;
  creationDate: string;
}

export class BudgetRequest implements IBudgetRequest {
  clientName: string;
  age: number;
  description: string;
  bodyPart: string;
  sizeInCm: number;
  phone: string;
  userAlias: string;
  isNew: boolean;
  creationDate: string;

  constructor(
    clientName: string,
    age: number,
    description: string,
    bodyPart: string,
    sizeInCm: number,
    phone: string,
    isNew: boolean,
    creationDate: string,
    userAlias?: string | null
  ) {
    this.clientName = clientName;
    this.age = age;
    this.description = description;
    this.bodyPart = bodyPart;
    this.sizeInCm = sizeInCm;
    this.phone = phone;
    this.userAlias = userAlias ? userAlias : '';
    this.isNew = isNew;
    this.creationDate = creationDate;
  }

  setUserAlias(userAlias: string): void {
    this.userAlias = userAlias;
  }

  setCreationAsNow(): void {
    const dateAsString = new Date().toJSON().replace('T', ' ');
    this.creationDate = dateAsString.substring(
      0,
      dateAsString.length - '.xxxZ'.length
    );
  }
}
