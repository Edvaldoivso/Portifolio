import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Head/header.component';
import { HomeComponent } from './Home/home.component';
import { MenuComponent } from './Menu/menu.component';
import { SponsorshipComponent } from './Sponsorship/sponsorship.component';
import { BodyComponent } from './body/body.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagesComponent } from './Pages/pages/pages.component';
import { IdeasComponent } from './Pages/ideas/ideas.component';
import { GaleryComponent } from './Pages/galery/galery.component';
import { IndorComponent } from './Pages/indor/indor.component';
import { SolPlenoComponent } from './Pages/sol-pleno/sol-pleno.component';
import { PlantDetailsComponent } from './Pages/plant-details/plant-details.component';
import { PlantModalComponent } from './components/plant-modal/plant-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    SponsorshipComponent,
    BodyComponent,
    ProjectsComponent,
    PagesComponent,
    IdeasComponent,
    GaleryComponent,
    IndorComponent,
    SolPlenoComponent,
    PlantDetailsComponent,
    PlantModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
