import { Component, OnInit } from '@angular/core';
import { Anamnese } from '../../../core/model/anamnese';

@Component({
  selector: 'app-new-anamnese',
  templateUrl: './new-anamnese.component.html',
  styleUrls: ['./new-anamnese.component.css'],
})
export class NewAnamneseComponent implements OnInit {
  anamnese: Anamnese = Anamnese.getEmptyAnamnese();

  constructor() {}

  ngOnInit(): void {}

  generateAnamnese(): void {
    console.log(this.anamnese);
    console.log(this.anamnese.clinicalInfo.cardiacProblem);
  }
}
