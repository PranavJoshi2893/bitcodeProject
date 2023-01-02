import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './main-page/nav-bar/nav-bar.component';
import { ToolTipComponent } from './main-page/nav-bar/tool-tip/tool-tip.component';
import { InfoPageComponent } from './main-page/info-page/info-page.component';
import { CourseComponentComponent } from './main-page/info-page/course-component/course-component.component';
import { AdvantagePageComponent } from './main-page/info-page/advantage-page/advantage-page.component';
import { ClientAndRecruitersComponent } from './main-page/info-page/client-and-recruiters/client-and-recruiters.component';
import { CompanyInfoComponent } from './main-page/company-info/company-info.component';
import { CourseCardComponent } from './main-page/info-page/course-component/course-card/course-card.component';
import { BitcodeService } from './bitcode.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    ToolTipComponent,
    InfoPageComponent,
    CourseComponentComponent,
    AdvantagePageComponent,
    ClientAndRecruitersComponent,
    CompanyInfoComponent,
    CourseCardComponent,
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
