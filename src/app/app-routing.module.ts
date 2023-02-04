import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseContentComponent } from './main-page/courses/course-content/course-content.component';
import { IndividualCourseComponent } from './main-page/courses/individual-course/individual-course.component';
import { InfoPageComponent } from './main-page/info-page/info-page.component';
import { PageNotFoundComponent } from './main-page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:InfoPageComponent},
  {path:"courses",component:CourseContentComponent},
  {path:"individualCourse",component:IndividualCourseComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
