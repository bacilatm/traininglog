import { Routes } from '@angular/router';
import { TrainingsDashboardComponent } from './main/trainings-dashboard/trainings-dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: TrainingsDashboardComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
