import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFinanceReleaseComponent } from './new-finance-release.component';

describe('NewFinanceReleaseComponent', () => {
  let component: NewFinanceReleaseComponent;
  let fixture: ComponentFixture<NewFinanceReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFinanceReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFinanceReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
