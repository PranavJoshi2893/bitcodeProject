import { Component, DoCheck, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements DoCheck,OnInit{
  
  @Input() percentage:number=0;

  ngOnInit():void{
    this.percentage;
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
