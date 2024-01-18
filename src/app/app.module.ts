// TODO delete this file
// we are using standalone components, so I don't see any reason in mixing them with modules
// you shouldn't have any module in this app
// we are bootstrapping the app in the main.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
})
export class AppModule { }
