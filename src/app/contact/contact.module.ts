import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

import { FormsModule } from '@angular/forms';
import { ContacterComponent } from './contacter/contacter.component';
import { DevisComponent } from './devis/devis.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContacterComponent,
    DevisComponent
  ],
  imports: [
  CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule { }
