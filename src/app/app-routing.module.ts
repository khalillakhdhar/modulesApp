import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
{ path:'',component:WelcomeComponent},
{ path: 'services', component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
