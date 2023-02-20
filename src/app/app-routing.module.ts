import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusPageComponent } from './feature/aboutus-page/aboutus-page.component';
import { ClientsPageComponent } from './feature/clients-page/clients-page.component';
import { ContactPageComponent } from './feature/contact-page/contact-page.component';
import { CoursesPageComponent } from './feature/courses-page/courses-page.component';
import { DMADPageComponent } from './feature/dmad-page/dmad-page.component';
import { HomePageComponent } from './feature/home-page/home-page.component';

import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { PlacementsPageComponent } from './feature/placements-page/placements-page.component';
import { SchedulePageComponent } from './feature/schedule-page/schedule-page.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomePageComponent},
  {path:"courses",component:CoursesPageComponent},
  {path:"DMAD",component:DMADPageComponent},
  {path:"schedule",component:SchedulePageComponent},
  {path:"clients",component:ClientsPageComponent},
  {path:"placements",component:PlacementsPageComponent},
  {path:"about-us",component:AboutusPageComponent},
  {path:"contact",component:ContactPageComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
