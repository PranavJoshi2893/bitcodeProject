import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements OnInit,AfterViewInit {

  @ViewChild('cardContainer') 
  content!: ElementRef;
  percentage:number=0;


  ngAfterViewInit(){
    this.content.nativeElement.addEventListener('scroll', this.updateProgress.bind(this));
  }

  updateProgress() {
    let totalWidth = this.content.nativeElement.scrollWidth;
    let scrollPosition = this.content.nativeElement.scrollLeft;
    let windowWidth = this.content.nativeElement.offsetWidth;
    this.percentage = (scrollPosition / (totalWidth - windowWidth)) * 100;
  }

  updateByPercentage(percentage: number) {
    let totalWidth = this.content.nativeElement.scrollWidth;
    let windowWidth = this.content.nativeElement.offsetWidth;
    let scrollPosition = (percentage / 100) * (totalWidth - windowWidth);
    this.content.nativeElement.scrollLeft = scrollPosition;
  }
  
  
  

  arr:string[]=[];
  
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
  onRightClick(){
    this.percentage+=this.devision;
    if(this.percentage>=100){
      this.percentage=100;
    }
    this.updateByPercentage(this.percentage);
  }
  onLeftClick(){
    this.percentage-=this.devision;
    if(this.percentage<=0){
      this.percentage=0;
    }
    this.updateByPercentage(this.percentage);
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
