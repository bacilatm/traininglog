import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-add-training',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  
  ],
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.scss'
})
export class AddTrainingComponent implements OnInit, OnDestroy {
  elapsedTime: number = 0;
  private subscription!: Subscription;
  isPaused: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.startChronometer();
  }

  ngOnDestroy(): void {
    this.stopChronometer();
  }

  startChronometer(): void{
    this.subscription = interval(1000).subscribe(() => {
      ++this.elapsedTime;
    });
  }

  pauseChronometer(event: MouseEvent): void {
    if (this.isPaused) {
      this.isPaused = false;
      this.startChronometer();
    } else {
      this.isPaused = true;
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }

  stopChronometer(): void {
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
