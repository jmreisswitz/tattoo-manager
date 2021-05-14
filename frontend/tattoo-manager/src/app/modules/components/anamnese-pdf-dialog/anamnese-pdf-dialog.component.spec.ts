import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesePdfDialogComponent } from './anamnese-pdf-dialog.component';

describe('AnamnesePdfDialogComponent', () => {
  let component: AnamnesePdfDialogComponent;
  let fixture: ComponentFixture<AnamnesePdfDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnamnesePdfDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamnesePdfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
