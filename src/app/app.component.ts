import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet} from '@angular/router';
import { AppNavComponent } from "./app-nav/app-nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterLink, RouterOutlet, AppNavComponent]
})

export class AppComponent {
  title = 'trainingLog';
}

