import { Component, DoCheck, HostListener, OnInit} from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements DoCheck,OnInit {

  arr:string[]=[];
  percentage:number=0;
  cardNumber:number=0;
  devision:number=0;
  
  constructor(private _bitcodeService:BitcodeService){}
  ngOnInit(): void {
    this._bitcodeService.getData().subscribe(data=>{
      this.arr=data.jobOrientedCourse;
      this.cardNumber=this.arr.length;
      this.devision=100/this.cardNumber;
    });
  }

  public getScreenWidth:number=window.innerWidth;
  cardContainerPosition:number=0;
  // turnOnOff():boolean{
  //   if(this.getScreenWidth>=1024){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  onRightClick(){
    this.percentage+=this.devision;
    this.cardContainerPosition-=this.devision;
    if(this.percentage>=100){
      this.percentage=100;
      this.cardContainerPosition=-100;
    }
  }
  onLeftClick(){
    this.percentage-=this.devision;
    this.cardContainerPosition+=this.devision;
    if(this.percentage<=0){
      this.percentage=0;
      this.cardContainerPosition=0;
    }
  }
  rightButtonColor:string="#4a4a4a";
  leftButtonColor:string="#4a4a4a";
  ngDoCheck(): void {
    if(this.percentage==100){
      this.rightButtonColor="#1cdac5"
    }
    else{
      this.rightButtonColor="#4a4a4a";
    }
    if(this.percentage==0){
      this.leftButtonColor="#1cdac5";
    }
    else{
      this.leftButtonColor="#4a4a4a";
    }
  }

}
