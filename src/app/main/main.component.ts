import { Component, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "../main/toolbar/toolbar.component";
import { SideNavComponent } from '../main/sidenav/sidenav.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-nav',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        AsyncPipe,
        RouterLink,
        RouterOutlet,
        ToolbarComponent,
        SideNavComponent,
        MatMenuModule
    ]
})
export class MainComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  @ViewChild(MatMenuTrigger) addTrainingsMenu!: MatMenuTrigger;
}
