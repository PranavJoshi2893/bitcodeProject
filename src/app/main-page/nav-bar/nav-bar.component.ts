import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  courses:string[]=["Mobile Application Development","Database Technology","Programming Languages","Java Technology","Web Technology","Software Testing Courses","Diploma Courses"];


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
