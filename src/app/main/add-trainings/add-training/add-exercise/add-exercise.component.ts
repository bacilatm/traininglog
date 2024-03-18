import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { Exercise } from './exercises';

@Component({
  selector: 'app-add-exercise',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './add-exercise.component.html',
  styleUrl: './add-exercise.component.scss'
})

export class AddExerciseComponent {

  exerciseForm: FormGroup;
  exercises: Exercise[] = [];
  dataSource: MatTableDataSource<Exercise>;
  exerciseName: string[] = [];
  newExercise!: Exercise;

  constructor(private formBuilder: FormBuilder) {
    this.exerciseForm = this.formBuilder.group({
      exercise: ['', Validators.required],
      repetitions: ['', Validators.required],
      weight: ['', Validators.required]
    });
    this.dataSource = new MatTableDataSource(this.exercises);
  }

  submitForm(): void {
    if (this.exerciseForm.valid) {
      const newExercise: Exercise = {
        name: this.exerciseForm.get('exercise')!.value,
        set: this.calculateSet(),
        repetitions: [this.exerciseForm.get('repetitions')!.value],
        weight: [this.exerciseForm.get('weight')!.value]
      };
      const isExercise = this.isExistingExercise(newExercise.name);
      if (isExercise) {
        const index = this.getExerciseIndex(newExercise.name);
        const existingExercise = this.exercises[index];
        existingExercise.set++;
        existingExercise.repetitions.push(newExercise.repetitions[0]);
        existingExercise.weight.push(newExercise.weight[0]);
      } else {
        this.exerciseName.push(newExercise.name);
        this.exercises.push(newExercise);
      }
      this.dataSource.data = this.exercises;
      this.exerciseForm.reset();
    }
  }

  getRepetitions(exercise: Exercise): string {
    return exercise.repetitions.join(', ');
  }

  getWeights(exercise: Exercise): string {
    return exercise.weight.map((weight: number) => `${weight} kg`).join(', ');
  }

  getExerciseIndex(name: string): number {
    return this.exerciseName.indexOf(name);
  }

  isExistingExercise(name: string): boolean {
    return this.getExerciseIndex(name) > -1;
  }

  calculateSet(): number {
    if (this.newExercise) {
      const index = this.getExerciseIndex(this.newExercise.name);
      return index > -1 ? ++this.exercises[index].set : 1;
    }
    return 1;
  }

}
