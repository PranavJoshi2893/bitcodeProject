import { Component, DoCheck, HostListener} from '@angular/core';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements DoCheck {



  arr:string[]=["DMAD(Deploma in mobile app development)","Web Expert(Full stack web Development)","Java Expert(Full stack java development)","Android Expert(Core java,Android)","iExpert(c,c++,Swift,iOS)"];



  percentage:number=0;
  counter=0;
  cardNumber:number=3;
  devision:number=100/this.cardNumber;


  rightButtonColor:string="#4a4a4a";
  leftButtonColor:string="#4a4a4a";

  public getScreenWidth:number=window.innerWidth;
  cardContainerPosition:number=370;
  @HostListener('window:resize',['$event'])
  onWindowResize(){
    this.getScreenWidth=window.innerWidth;
    this.percentage=0;
    this.counter=0;
    
    
    if(this.getScreenWidth>=1280){
      this.cardContainerPosition=(this.getScreenWidth-1180)/2;
    }
    else if(this.getScreenWidth>=1024 && this.getScreenWidth<=1279 ){
      this.cardContainerPosition=(this.getScreenWidth-1024)/2;
    }
    else{
      this.cardContainerPosition=0;
    }
    
  }

  turnOnOff():boolean{
    if(this.getScreenWidth>=1024){
      return true;
    }
    else{
      return false;
    }
  }

  
  onRightClick(){
    this.percentage+=this.devision;
    if(this.percentage>=100){
      this.percentage=100;
    }
    else{
      console.log(this.cardContainerPosition);
    }
    
    
    
    
    this.counter++;
    if(this.counter>3){
      this.counter=3;      
    }
    else{
      this.cardContainerPosition-=496;
    }
  }
  
  onLeftClick(){
    this.percentage-=this.devision;
    if(this.percentage<=0){
      this.percentage=0;
    }
    else{
      console.log(this.cardContainerPosition);
    }
    
    
    this.counter--;
    if(this.counter<0){
      this.counter=0;      
    }
    else{
      this.cardContainerPosition+=496;
    }
  }
  



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
