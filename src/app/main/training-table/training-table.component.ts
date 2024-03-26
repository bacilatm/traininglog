import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Exercise } from '../add-trainings/add-training/add-exercise/exercise.model';
import { CommonModule } from '@angular/common';
import { tableHeaderRowDef } from '../add-trainings/add-training/add-exercise/table.config';

@Component({
  selector: 'app-training-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './training-table.component.html',
  styleUrl: './training-table.component.scss'
})
export class TrainingTableComponent {

  @Input() dataSource!: MatTableDataSource<Exercise>;
  tableDef =  tableHeaderRowDef;

  getRepetitions(exercise: Exercise): string {
    return exercise.repetitions.join(', ');
  }

  getWeights(exercise: Exercise): string {
    return exercise.weight.map((weight: number) => `${weight} kg`).join(', ');
  }
}

