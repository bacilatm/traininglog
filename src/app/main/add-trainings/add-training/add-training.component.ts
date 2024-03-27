import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { DeleteTrainingComponent } from './delete-training/delete-training.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-training',
    standalone: true,
    templateUrl: './add-training.component.html',
    styleUrl: './add-training.component.scss',
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        AddExerciseComponent,
        DeleteTrainingComponent
    ]
})
export class AddTrainingComponent implements OnInit, OnDestroy {
  elapsedTime: number = 0;
  private subscription!: Subscription;
  isPaused: boolean = false;
  isDelete: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) {
    
  }

  ngOnInit(): void {
    this.startStopWatch();
  }

  ngOnDestroy(): void {
    this.deleteTraining();
  }

  startStopWatch(): void{
    this.subscription = interval(1000).subscribe(() => {
      if (!this.isPaused) {
        ++this.elapsedTime;
      }
    });
  }

  pauseStopWatch(): void {
    if (!this.isPaused) {
      this.isPaused = true;
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    } else {
      this.isPaused = false;
      this.startStopWatch();
    }
  }

  deleteTraining(): void {
    if (this.isDelete) {
      return;
    }
    this.isDelete = true;
    if (!this.isPaused) {
      this.pauseStopWatch();
    }
    const dialogRef = this.dialog.open(DeleteTrainingComponent);
    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.isDelete = true;
      if (!result) {
        this.isPaused = true;
        this.pauseStopWatch();
        this.isDelete = false;
      } else {
        this.subscription.unsubscribe();
        this.elapsedTime = 0;
        dialogRef.close();
        this.router.navigate(['/']);
      }
    });
  }

  formatTime(seconds: number): string {
    const hours: number = Math.floor(seconds / 3600);
    const minutes: number = Math.floor((seconds % 3600) / 60);
    const secs: number = seconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

}