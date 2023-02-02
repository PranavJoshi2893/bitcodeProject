import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,OnChanges {
  
  courses:any[]=[];
  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit(): void {
    this._bitcodeService.getData().subscribe(data=>{
        this.courses=data.course;
      })
  }
  
  public getScreenWidth:number=window.innerWidth;

  ngOnChanges():void{
    this.getScreenWidth;
  }

  turnOnOff():boolean{
    if(this.getScreenWidth>=1024){
      return true;
    }
    else{
      return false;
    }
  }

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
