import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit{

  constructor(private _route:ActivatedRoute,private _bitcodeService:BitcodeService){}

  courseDetail:any[]=[];
  courseId:number=0;
  subCourseId:number=0;

  ngOnInit(): void {
    this._route.paramMap.subscribe((params:ParamMap)=>{
      this.courseId=Number(params.get("courseId"));
      this.subCourseId=Number(params.get("subCourseId"));


      this._bitcodeService.getData().subscribe(data=>{
        this.courseDetail=data.course[this.courseId-1].subCourse[this.subCourseId-1].courseContent;
        console.log(this.courseDetail);
      });

    })    
  }
}
