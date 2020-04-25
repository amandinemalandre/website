import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './scenes/about/about.component';
import { ContactComponent } from './scenes/contact/contact.component';
import { CreationsComponent } from './scenes/creations/creations.component';
import { HomeComponent } from './scenes/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'creations', component: CreationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
