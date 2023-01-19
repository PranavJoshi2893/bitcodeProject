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
import { CoursesComponent } from './main-page/courses/courses.component';
import { PageNotFoundComponent } from './main-page/page-not-found/page-not-found.component';
import { IndividualCourseComponent } from './main-page/courses/individual-course/individual-course.component';
import { CourseContentComponent } from './main-page/courses/course-content/course-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// angular material------------------------------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
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
    CoursesComponent,
    PageNotFoundComponent,
    IndividualCourseComponent,
    CourseContentComponent
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
    MatButtonModule
  ],
  providers: [BitcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
