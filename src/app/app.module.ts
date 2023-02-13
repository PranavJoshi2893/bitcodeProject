import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { BitcodeService } from './bitcode.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './main-page/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Home page components--------------------------------------------------------------------------------------------------
import { HomePageComponent } from './main-page/home-page/home-page.component';
import { AdvantageBitcodeComponent } from './main-page/home-page/advantage-bitcode/advantage-bitcode.component';
import { LifeAtBitcodeComponent } from './main-page/home-page/life-at-bitcode/life-at-bitcode.component';
import { TestimonialsComponent } from './main-page/home-page/testimonials/testimonials.component';
import { BannerComponent } from './main-page/home-page/banner/banner.component';
import { BannerContainerComponent } from './main-page/home-page/banner/banner-container/banner-container.component';
import { ContainerComponent } from './main-page/home-page/container/container.component';
import { SliderContainerComponent } from './main-page/home-page/slider-container/slider-container.component';
import { SliderComponent } from './main-page/home-page/slider/slider.component';
import { CourseComponentComponent } from './main-page/home-page/course-component/course-component.component';
import { ClientAndRecruitersComponent } from './main-page/home-page/client-and-recruiters/client-and-recruiters.component';
//-----------------------------------------------------------------------------------------------------------------------

// angular material------------------------------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';

//-----------------------------------------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CourseComponentComponent,
    ClientAndRecruitersComponent,
    CompanyInfoComponent,
    PageNotFoundComponent,
    AdvantageBitcodeComponent,
    LifeAtBitcodeComponent,
    TestimonialsComponent,
    BannerComponent,
    BannerContainerComponent,
    ContainerComponent,
    SliderContainerComponent,
    SliderComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressBarModule,
    MatRippleModule
  ],
  providers: [BitcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
