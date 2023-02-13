import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.css']
})
export class SliderContainerComponent implements AfterViewInit {

  @Input() arr:any[]=[];
  @Output() valueEmitter = new EventEmitter<number>()


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
    this.valueEmitter.emit(this.percentage);
  }

  // updateByPercentage(percentage: number) {
  //   let totalWidth = this.content.nativeElement.scrollWidth;
  //   let windowWidth = this.content.nativeElement.offsetWidth;
  //   let scrollPosition = (percentage / 100) * (totalWidth - windowWidth);
  //   this.content.nativeElement.scrollLeft = scrollPosition;
  // }

}
