import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { DMADPageComponent } from './dmad-page/dmad-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdvantageBitcodeComponent } from './home-page/advantage-bitcode/advantage-bitcode.component';
import { LifeAtBitcodeComponent } from './home-page/life-at-bitcode/life-at-bitcode.component';
import { TestimonialsComponent } from './home-page/testimonials/testimonials.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { BannerContainerComponent } from './home-page/banner/banner-container/banner-container.component';
import { CourseComponentComponent } from './home-page/course-component/course-component.component';
import { ClientAndRecruitersComponent } from './home-page/client-and-recruiters/client-and-recruiters.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlacementsPageComponent } from './placements-page/placements-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';

import { SharedModule } from "../shared/shared.module";

import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        AboutusPageComponent,
        AllCoursesComponent,
        ClientsPageComponent,
        ContactPageComponent,
        CoursesPageComponent,
        DMADPageComponent,
        HomePageComponent,
        AdvantageBitcodeComponent,
        LifeAtBitcodeComponent,
        TestimonialsComponent,
        BannerComponent,
        BannerContainerComponent,
        CourseComponentComponent,
        ClientAndRecruitersComponent,
        PageNotFoundComponent,
        PlacementsPageComponent,
        SchedulePageComponent
    ],
    exports: [
        AboutusPageComponent,
        AllCoursesComponent,
        ClientsPageComponent,
        ContactPageComponent,
        CoursesPageComponent,
        DMADPageComponent,
        HomePageComponent,
        AdvantageBitcodeComponent,
        LifeAtBitcodeComponent,
        TestimonialsComponent,
        BannerComponent,
        BannerContainerComponent,
        CourseComponentComponent,
        ClientAndRecruitersComponent,
        PageNotFoundComponent,
        PlacementsPageComponent,
        SchedulePageComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatCardModule
    ]
})
export class FeatureModule { }
