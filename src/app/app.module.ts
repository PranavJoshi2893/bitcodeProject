import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfoPageComponent } from './main-page/info-page/info-page.component';
import { CourseComponentComponent } from './main-page/info-page/course-component/course-component.component';
import { ClientAndRecruitersComponent } from './main-page/info-page/client-and-recruiters/client-and-recruiters.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CourseCardComponent } from './main-page/info-page/course-component/course-card/course-card.component';
import { BitcodeService } from './bitcode.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './main-page/page-not-found/page-not-found.component';
import { CourseContentComponent } from './main-page/courses/course-content/course-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndividualCourseComponent } from './main-page/courses/individual-course/individual-course.component';


// angular material------------------------------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import { AdvantageBitcodeComponent } from './main-page/info-page/advantage-bitcode/advantage-bitcode.component';
import { AdvantageCardComponent } from './main-page/info-page/advantage-bitcode/advantage-card/advantage-card.component';
import { LifeAtBitcodeComponent } from './main-page/info-page/life-at-bitcode/life-at-bitcode.component';
import { TestimonialsComponent } from './main-page/info-page/testimonials/testimonials.component';
import { BannerComponent } from './main-page/info-page/banner/banner.component';
import { BannerContainerComponent } from './main-page/info-page/banner/banner-container/banner-container.component';
//-----------------------------------------------------------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InfoPageComponent,
    CourseComponentComponent,
    ClientAndRecruitersComponent,
    CompanyInfoComponent,
    CourseCardComponent,
    PageNotFoundComponent,
    CourseContentComponent,
    AdvantageBitcodeComponent,
    AdvantageCardComponent,
    IndividualCourseComponent,
    LifeAtBitcodeComponent,
    TestimonialsComponent,
    BannerComponent,
    BannerContainerComponent
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
