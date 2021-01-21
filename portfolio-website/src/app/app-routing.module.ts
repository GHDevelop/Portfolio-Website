import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
