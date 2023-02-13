import { Component, OnInit} from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';


@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements OnInit{

  percentage:number=0;
  courses:string[]=[];
  cardNumber:number=0;
  devision:number=0;

  receivePercentage(event:number){
    this.percentage=event;
  }

  constructor(private _bitcodeService:BitcodeService){}
  ngOnInit(): void {
    this._bitcodeService.getData().subscribe(data=>{
      this.courses=data.jobOrientedCourse;
      this.cardNumber=this.courses.length;
      this.devision=100/this.cardNumber;
    });
  }

}
