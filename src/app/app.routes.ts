import { Routes } from '@angular/router';
import { TrainingsDashboardComponent } from './main/trainings-dashboard/trainings-dashboard.component';
import { AddTrainingComponent } from './main/add-trainings/add-training/add-training.component';

export const routes: Routes = [
    { path: 'dashboard', component: TrainingsDashboardComponent },
    { path: 'add-training', component: AddTrainingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
