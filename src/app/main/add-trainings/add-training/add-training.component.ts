import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';


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
        AddExerciseComponent
    ]
})
export class AddTrainingComponent implements OnInit, OnDestroy {
  elapsedTime: number = 0;
  private subscription!: Subscription;
  isPaused: boolean = false;


  constructor() {}

  ngOnInit(): void {
    this.startStopWatch();
  }

  ngOnDestroy(): void {
    this.cancelTraining();
  }

  startStopWatch(): void{
    this.subscription = interval(1000).subscribe(() => {
      ++this.elapsedTime;
    });
  }

  pauseStopWatch(event: MouseEvent): void {
    if (this.isPaused) {
      this.isPaused = false;
      this.startStopWatch();
    } else {
      this.isPaused = true;
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }

  cancelTraining(): void {
    this.subscription.unsubscribe();
    this.elapsedTime = 0;
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
