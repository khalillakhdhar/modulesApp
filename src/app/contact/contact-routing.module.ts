import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContacterComponent } from './contacter/contacter.component';
import { DevisComponent } from './devis/devis.component';

const routes: Routes = [{ path: '', component: ContactComponent,
children: [
  { path: '', component: ContacterComponent},
  {path:"devis",component:DevisComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
