import { Routes } from '@angular/router';
import { TrainingsDashboardComponent } from './trainings-dashboard/trainings-dashboard.component';

export const routes: Routes = [
    { path: 'traininglog', component: TrainingsDashboardComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
