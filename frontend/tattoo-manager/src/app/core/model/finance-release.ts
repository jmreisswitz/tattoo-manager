export enum FinanceType {
  EXPENSE = 'Despesa',
  PROFIT = 'Receita',
}

export enum FinanceGroup {
  INFRASTRUCTURE = 'Infraestrutura',
  MATERIAL = 'Material',
  MARKETING = 'Marketing',
  SOFTWARE = 'Software',
  PERSONAL_DEVELOPMENT = 'Desenvolvimento Pessoal',

  // Profits
  TATTOO_JOB = 'Trabalho de tattooagem',
  DRAWING = 'Venda de desenhos',
  COURSE = 'Cursos',
  CONSULTANCY = 'Consultoria',
}

export interface FinanceRelease {
  releaseDate: Date;
  value: number;
  description: string;
  type: FinanceType | string;
  group: FinanceGroup | string;
}
