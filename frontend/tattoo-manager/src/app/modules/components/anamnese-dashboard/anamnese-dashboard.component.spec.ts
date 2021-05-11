import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamneseDashboardComponent } from './anamnese-dashboard.component';

describe('AnamneseDashboardComponent', () => {
  let component: AnamneseDashboardComponent;
  let fixture: ComponentFixture<AnamneseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnamneseDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamneseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
