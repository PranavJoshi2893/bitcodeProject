import { Component, HostListener } from '@angular/core';
import { CoursesModel } from 'src/app/model/courses-model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  
  courses:CoursesModel[]=[
    new CoursesModel("Mobile Application Development",["Android App Development","Android Expert","iPhone App Development","iExpert"]),
    new CoursesModel("Web Technology",["Web Expert","Angular 8","Angular and Node.JS","React JS and React Native ","PHP/MySQL"]),
    new CoursesModel("Programming Languages",["C Programming","C++ Programming","Data Structure using C, C++","Python"]),
    new CoursesModel("Java Technology",["Core Java","Adv. Java(Sarvlet, JSP)","Java Expert"]),
    new CoursesModel("Database Technology",["Big Data Hadoop"]),
    new CoursesModel("Software Testing Courses",["Software Testing"]),
    new CoursesModel("Diploma Courses",["DMAD (Diploma in Mobile App Development)"])
  ];
  
 
  public getScreenWidth:number=window.innerWidth;

  @HostListener('window:resize',['$event'])
  onWindowResize(){
    this.getScreenWidth=window.innerWidth;
  }

  turnOnOff():boolean{
    if(this.getScreenWidth>=1024){
      return true;
    }
    else{
      return false;
    }
  }
  

}
