import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss'
})

export class AddExerciseComponent {
  exerciseForm = new FormGroup({
    exercise: new FormControl('', Validators.required),
    repetitions: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
  });
}
