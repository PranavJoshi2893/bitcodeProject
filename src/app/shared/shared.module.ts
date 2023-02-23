import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderContainerComponent } from './slider-container/slider-container.component';
import { SliderComponent } from './slider/slider.component';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { SectionBodyComponent } from './section-body/section-body.component';
import { CourseCardComponent } from './slider-container/course-card/course-card.component';
import { AdvantageCardComponent } from './slider-container/advantage-card/advantage-card.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    SliderContainerComponent,
    SliderComponent,
    SectionHeadingComponent,
    SectionBodyComponent,
    CourseCardComponent,
    AdvantageCardComponent
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
    SliderComponent,
    SectionHeadingComponent,
    SectionBodyComponent,
    CourseCardComponent,
    AdvantageCardComponent
  ]
})
export class SharedModule { }
