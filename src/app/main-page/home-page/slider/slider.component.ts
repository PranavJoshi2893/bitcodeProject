import { Component, DoCheck, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements DoCheck{
  
  @Input() percentage:number=0;
  
  cardNumber:number=0;
  devision:number=0;

  onRightClick(){
    this.percentage+=this.devision;
    if(this.percentage>=100){
      this.percentage=100;
    }
  }
  onLeftClick(){
    this.percentage-=this.devision;
    if(this.percentage<=0){
      this.percentage=0;
    }
  }

  rightButtonColor:string="#4a4a4a";
  leftButtonColor:string="#4a4a4a";
  ngDoCheck(): void {
    this.percentage;
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
