import { Routes } from '@angular/router';
import { TrainingsDashboardComponent } from './trainings-dashboard/trainings-dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'traininglog', component: TrainingsDashboardComponent },
    { path: 'home', component: AppComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
