import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// TODO remove this; it was the old way of bootstrapping the application
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
