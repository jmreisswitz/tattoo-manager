import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnamneseComponent } from './new-anamnese.component';

describe('NewAnamneseComponent', () => {
  let component: NewAnamneseComponent;
  let fixture: ComponentFixture<NewAnamneseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAnamneseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
