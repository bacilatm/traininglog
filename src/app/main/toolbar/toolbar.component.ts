import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar-component',
  standalone: true,
  imports: [MatToolbarModule, AsyncPipe, MatIcon, MatIconButton],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() isHandset$!: Observable<boolean>;
  @Output() toggleMenu = new EventEmitter<unknown>();

  toggle(): void {
    this.toggleMenu.emit(null);
  }
}
