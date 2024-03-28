import { Component } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-training',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatDialogTitle,
    MatDialogClose,
  ],
  templateUrl: './delete-training.component.html',
  styleUrl: './delete-training.component.scss'
})
export class DeleteTrainingComponent {

  constructor(public dialogRef: MatDialogRef<DeleteTrainingComponent>) {}

  cancelTraining(): void {
    this.dialogRef.close(true);
  }

  resumeTraining(): void {
    this.dialogRef.close(false);
  }

}