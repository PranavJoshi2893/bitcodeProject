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
        console.log(this.courses)
      })
  }
  
  public getScreenWidth:number=window.innerWidth;

  turnOnOff():boolean{
    if(this.getScreenWidth>=1025){
      return true;
    }
    else{
      return false;
    }
  }

  courseIndex:number=0;
  subCourseIndex:number=0;



  condition:boolean=false;
  onSelect(){
    if(this.condition==false){
      this.condition=true;
    }
    else{
      this.condition=false;
    }
  }
  
}
