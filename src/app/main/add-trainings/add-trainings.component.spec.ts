import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingsComponent } from './add-trainings.component';

describe('AddTrainigsComponent', () => {
  let component: AddTrainingsComponent;
  let fixture: ComponentFixture<AddTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrainingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
