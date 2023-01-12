import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  courses:any[]=[];
  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit(): void {
    this._bitcodeService.getData().subscribe(data=>{
        this.courses=data.course;
      })
  }
  
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

  courseIndex:number=0;
  subCourseIndex:number=0;
  
}
