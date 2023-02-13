import { Component, OnInit} from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';


@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements OnInit{

  
  courses:string[]=[];

  constructor(private _bitcodeService:BitcodeService){}
  ngOnInit(): void {
    this._bitcodeService.getData().subscribe(data=>this.courses=data.jobOrientedCourse);
  }

  percentage:number=0;
  receivePercentage(event:number){
    this.percentage=event;
  }

}
