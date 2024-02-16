import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusinessComponent } from './category/business/business.component';
import { EntertainmentComponent } from './category/entertainment/entertainment.component';
import { GeneralComponent } from './category/general/general.component';
import { HealthComponent } from './category/health/health.component';
import { ScienceComponent } from './category/science/science.component';
import { SportsComponent } from './category/sports/sports.component';
import { TechnologyComponent } from './category/technology/technology.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {'path':'car',component:CarouselComponent},
  {'path':'home', 'title':'News Hub - The Trending stories in real time', component:HomeComponent},
  {'path':'business', 'title':'Business', component:BusinessComponent},
  {'path':'entertainment', 'title':'Entertainment', component:EntertainmentComponent},
  {'path':'general', 'title':'General', component:GeneralComponent},
  {'path':'health', 'title':'Health', component:HealthComponent},
  {'path':'science', 'title':'Science', component:ScienceComponent},
  {'path':'sports', 'title':'Sports', component:SportsComponent},
  {'path':'technology', 'title':'Technology', component:TechnologyComponent},
  {'path':'about', 'title':'About', component:AboutComponent},
  {'path':'contact', 'title':'Contact', component:ContactComponent},
  {'path': '',   redirectTo: '/home', pathMatch: 'full' },
  {'path':'**', 'title':'404 - Page Not Found', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
