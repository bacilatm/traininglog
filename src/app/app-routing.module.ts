// TODO delete this file
// we are using standalone components, so I don't see any reason in mixing them with modules
// you shouldn't have any module in this app
// we are providing the routes in the main.ts

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
