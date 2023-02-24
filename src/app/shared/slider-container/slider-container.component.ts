import { AfterViewInit, Component, ElementRef, EventEmitter, Input,  Output,  ViewChild } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.css']
})
export class SliderContainerComponent implements AfterViewInit{

  @Input() id:number=0
  @Output() advProgressPerEmitter = new EventEmitter<number>();
  @Output() courseProgressPerEmitter = new EventEmitter<number>();

  courses:any=[];
  advantages:any=[];

  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit():void{
    this._bitcodeService.getCardData().subscribe(data=>this.advantages=data[0]);
    this._bitcodeService.getCardData().subscribe(data=>this.courses=data[1]);
  }
  
  
  @ViewChild('advantageCardContainer')
  advantageCardContainer!:ElementRef;
  advantageUpdatedPercentage:number=0;

  @ViewChild('courseCardContainer')
  courseCardContainer!:ElementRef;
  courseUpdatedPercentage:number=0;


  ngAfterViewInit(): void {
    if(this.id==0){
      this.advantageCardContainer.nativeElement.addEventListener('scroll', this.advantageProgressBar.bind(this));
    }
    else{
      this.courseCardContainer.nativeElement.addEventListener('scroll', this.courseProgressBar.bind(this));
    }
  }
  advantageProgressBar() {
    let totalWidth = this.advantageCardContainer.nativeElement.scrollWidth;
    let scrollPosition = this.advantageCardContainer.nativeElement.scrollLeft;
    let windowWidth = this.advantageCardContainer.nativeElement.offsetWidth;
    this.advantageUpdatedPercentage = (scrollPosition / (totalWidth - windowWidth)) * 100;
    this.advProgressPerEmitter.emit(this.advantageUpdatedPercentage);
  }
  courseProgressBar() {
    let totalWidth = this.courseCardContainer.nativeElement.scrollWidth;
    let scrollPosition = this.courseCardContainer.nativeElement.scrollLeft;
    let windowWidth = this.courseCardContainer.nativeElement.offsetWidth;
    this.courseUpdatedPercentage = (scrollPosition / (totalWidth - windowWidth)) * 100;
    this.courseProgressPerEmitter.emit(this.courseUpdatedPercentage);
  }  

}
