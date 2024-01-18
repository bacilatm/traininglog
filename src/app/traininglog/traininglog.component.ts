import { Component } from '@angular/core';

// TODO always use kebab-case for selectors, files and folders
// eg: app-training-log, app-training-log.component.html
@Component({
  selector: 'app-traininglog',
  standalone: true,
  imports: [],
  templateUrl: './traininglog.component.html',
  styleUrl: './traininglog.component.scss'
})
// TODO always use the PascalCase style for class names, eg: TrainingLogComponent
// TODO rename it; having a page with the same name as the whole app can be confusing
// suggestions: TrainingsComponent, AllTrainingsComponent
export class TraininglogComponent {

}
