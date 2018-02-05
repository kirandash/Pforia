import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { RouterModule } from '@angular/router';

import { routes } from './home.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeDetailComponent]
})
export class HomeModule { }
