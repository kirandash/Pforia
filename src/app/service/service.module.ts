import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { RouterModule } from '@angular/router';

import { routes } from './service.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceDetailComponent]
})
export class ServiceModule { }
