import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitcodeService } from './bitcode.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Core components---------------------------------------------------------------------------------------------------
import { CompanyInfoComponent } from './core/company-info/company-info.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
//-----------------------------------------------------------------------------------------------------------------------

// Feature Component-----------------------------------------------------------------------------------------------------
import { AboutusPageComponent } from './feature/aboutus-page/aboutus-page.component';
import { AllCoursesComponent } from './feature/all-courses/all-courses.component';
import { ClientsPageComponent } from './feature/clients-page/clients-page.component';
import { ContactPageComponent } from './feature/contact-page/contact-page.component';
import { CoursesPageComponent } from './feature/courses-page/courses-page.component';
import { DMADPageComponent } from './feature/dmad-page/dmad-page.component';
import { HomePageComponent } from './feature/home-page/home-page.component';
import { AdvantageBitcodeComponent } from './feature/home-page/advantage-bitcode/advantage-bitcode.component';
import { LifeAtBitcodeComponent } from './feature/home-page/life-at-bitcode/life-at-bitcode.component';
import { TestimonialsComponent } from './feature/home-page/testimonials/testimonials.component';
import { BannerComponent } from './feature/home-page/banner/banner.component';
import { BannerContainerComponent } from './feature/home-page/banner/banner-container/banner-container.component';
import { CourseComponentComponent } from './feature/home-page/course-component/course-component.component';
import { ClientAndRecruitersComponent } from './feature/home-page/client-and-recruiters/client-and-recruiters.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { PlacementsPageComponent } from './feature/placements-page/placements-page.component';
import { SchedulePageComponent } from './feature/schedule-page/schedule-page.component';
//-----------------------------------------------------------------------------------------------------------------------


// Shared components-----------------------------------------------------------------------------------------------------
import { SliderContainerComponent } from './shared/slider-container/slider-container.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SectionHeadingComponent } from './shared/section-heading/section-heading.component';
import { SectionBodyComponent } from './shared/section-body/section-body.component';
//-----------------------------------------------------------------------------------------------------------------------


// angular material------------------------------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import { CourseCardComponent } from './shared/slider-container/course-card/course-card.component';
import { AdvantageCardComponent } from './shared/slider-container/advantage-card/advantage-card.component';
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
    SliderContainerComponent,
    SliderComponent,
    HomePageComponent,
    CoursesPageComponent,
    DMADPageComponent,
    SchedulePageComponent,
    ClientsPageComponent,
    PlacementsPageComponent,
    AboutusPageComponent,
    ContactPageComponent,
    SectionHeadingComponent,
    SectionBodyComponent,
    AllCoursesComponent,
    CourseCardComponent,
    AdvantageCardComponent
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
