import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraininglogComponent } from './traininglog.component';

describe('TraininglogComponent', () => {
  let component: TraininglogComponent;
  let fixture: ComponentFixture<TraininglogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraininglogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraininglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
