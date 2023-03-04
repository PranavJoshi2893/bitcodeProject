import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderContainerComponent } from './slider-container/slider-container.component';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { SectionBodyComponent } from './section-body/section-body.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { AdvantageCardComponent } from './advantage-card/advantage-card.component';
import { CoursesContainerComponent } from './courses-container/courses-container.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { IndividualCourseComponent } from './individual-course/individual-course.component';

@NgModule({
  declarations: [
    SliderContainerComponent,
    SectionHeadingComponent,
    SectionBodyComponent,
    CourseCardComponent,
    AdvantageCardComponent,
    CoursesContainerComponent,
    IndividualCourseComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports:[
    SliderContainerComponent,
    SectionHeadingComponent,
    SectionBodyComponent,
    CourseCardComponent,
    AdvantageCardComponent,
    CoursesContainerComponent
  ]
})
export class SharedModule { }
