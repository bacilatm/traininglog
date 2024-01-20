import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsDashboardComponent } from './trainings-dashboard.component';

describe('TrainingsDashboardComponent', () => {
  let component: TrainingsDashboardComponent;
  let fixture: ComponentFixture<TrainingsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingsDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
