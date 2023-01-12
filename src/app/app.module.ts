import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main-page/nav-bar/nav-bar.component';
import { ToolTipComponent } from './main-page/nav-bar/tool-tip/tool-tip.component';
import { InfoPageComponent } from './main-page/info-page/info-page.component';
import { CourseComponentComponent } from './main-page/info-page/course-component/course-component.component';
import { ClientAndRecruitersComponent } from './main-page/info-page/client-and-recruiters/client-and-recruiters.component';
import { CompanyInfoComponent } from './main-page/company-info/company-info.component';
import { CourseCardComponent } from './main-page/info-page/course-component/course-card/course-card.component';
import { BitcodeService } from './bitcode.service';
import { HttpClientModule } from '@angular/common/http';
import { TempComp1Component } from './main-page/info-page/temp-comp1/temp-comp1.component';
import { CoursesComponent } from './main-page/courses/courses.component';
import { PageNotFoundComponent } from './main-page/page-not-found/page-not-found.component';
import { IndividualCourseComponent } from './main-page/courses/individual-course/individual-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolTipComponent,
    InfoPageComponent,
    CourseComponentComponent,
    ClientAndRecruitersComponent,
    CompanyInfoComponent,
    CourseCardComponent,
    TempComp1Component,
    CoursesComponent,
    PageNotFoundComponent,
    IndividualCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BitcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
