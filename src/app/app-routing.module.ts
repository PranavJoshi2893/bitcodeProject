import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './main-page/courses/courses.component';
import { InfoPageComponent } from './main-page/info-page/info-page.component';
import { PageNotFoundComponent } from './main-page/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:InfoPageComponent},
  {path:"courses/:courseId/:subCourseId",component:CoursesComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
