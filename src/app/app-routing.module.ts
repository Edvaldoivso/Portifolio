import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { IndorComponent } from './Pages/indor/indor.component';
import { PagesComponent } from './Pages/pages/pages.component';
import { IdeasComponent } from './Pages/ideas/ideas.component';
import { GaleryComponent } from './Pages/galery/galery.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'indor', component: IndorComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'pages', component: PagesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
