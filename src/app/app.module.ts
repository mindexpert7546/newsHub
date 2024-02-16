import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BusinessComponent } from './category/business/business.component';
import { EntertainmentComponent } from './category/entertainment/entertainment.component';
import { GeneralComponent } from './category/general/general.component';
import { HealthComponent } from './category/health/health.component';
import { ScienceComponent } from './category/science/science.component';
import { SportsComponent } from './category/sports/sports.component';
import { TechnologyComponent } from './category/technology/technology.component';
import { FeaturesComponent } from './features/features.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InterceptorService } from './Loader/interceptor.service';
import { CarouselComponent } from './carousel/carousel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    FeaturesComponent,
    CarouselComponent,
    
   
    
    
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatProgressBarModule
  ],
  providers: [
    provideAnimationsAsync(),
   {provide: HTTP_INTERCEPTORS,useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
