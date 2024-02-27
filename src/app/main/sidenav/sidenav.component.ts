import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatToolbar } from "@angular/material/toolbar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidenav-component',
  standalone: true,
  imports: [MatSidenavModule, MatListItem, MatMenu, MatMenuItem, MatNavList, MatToolbar, RouterLink, MatMenuTrigger],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SideNavComponent {

}
