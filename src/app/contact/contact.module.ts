import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { RouterModule } from '@angular/router';

import { routes } from './contact.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactDetailComponent]
})
export class ContactModule { }
