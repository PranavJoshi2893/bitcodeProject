import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    CompanyInfoComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule
  ],
  exports:[
    CompanyInfoComponent,
    NavBarComponent
  ]
})
export class CoreModule { }
