import { Component, HostListener, OnInit} from '@angular/core';
import { CoursesModel } from 'src/app/model/courses-model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  courses:CoursesModel[]=[
    new CoursesModel("Mobile Application Development",["Android App Development","Android Expert","iPhone App Development","iExpert"]),
    new CoursesModel("Web Technology",["Web Expert","Angular 8","Angular and Node.JS","React JS and React Native ","PHP/MySQL"]),
    new CoursesModel("Programming Languages",["C Programming","C++ Programming","Data Structure using C, C++","Python"]),
    new CoursesModel("Java Technology",["Core Java","Adv. Java(Sarvlet, JSP)","Java Expert"]),
    new CoursesModel("Database Technology",["Big Data Hadoop"]),
    new CoursesModel("Software Testing Courses",["Software Testing"]),
    new CoursesModel("Diploma Courses",["DMAD (Diploma in Mobile App Development)"])
  ];
  
  public getScreenWidth:any;

  ngOnInit():void{
    this.getScreenWidth=window.innerWidth;
  }

  @HostListener('window:resize',['$event'])
  onWindowResize():boolean{
    this.getScreenWidth=window.innerWidth;
    console.log(this.getScreenWidth);


    if(this.getScreenWidth>=1024){
      return true;
    }
    else{
      return false;
    }

  }

}
