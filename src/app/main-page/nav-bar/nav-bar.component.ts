import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  courses:string[]=["Mobile Application Development","Database Technology","Programming Languages","Java Technology","Web Technology","Software Testing Courses","Diploma Courses"]

}
