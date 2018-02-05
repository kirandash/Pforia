import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GammeDetailComponent } from './gamme-detail/gamme-detail.component';
import { RouterModule } from '@angular/router';

import { routes } from './gamme.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GammeDetailComponent]
})
export class GammeModule { }
