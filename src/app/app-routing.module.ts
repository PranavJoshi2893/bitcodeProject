import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusPageComponent } from './main-page/aboutus-page/aboutus-page.component';
import { ClientsPageComponent } from './main-page/clients-page/clients-page.component';
import { ContactPageComponent } from './main-page/contact-page/contact-page.component';
import { CoursesPageComponent } from './main-page/courses-page/courses-page.component';
import { DMADPageComponent } from './main-page/dmad-page/dmad-page.component';
import { HomePageComponent } from './main-page/home-page/home-page.component';

import { PageNotFoundComponent } from './main-page/page-not-found/page-not-found.component';
import { PlacementsPageComponent } from './main-page/placements-page/placements-page.component';
import { SchedulePageComponent } from './main-page/schedule-page/schedule-page.component';

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
