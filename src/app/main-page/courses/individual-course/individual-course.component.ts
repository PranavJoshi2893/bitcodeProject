import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.css']
})
export class IndividualCourseComponent implements OnInit{
  subCourses:any[]=[];
  courseId:number=0;
  subCourseId:number=0;
  subCourseName:string="";
  subCourseDetail:string="";
  
  constructor(private _route:ActivatedRoute,private _bitcodeService:BitcodeService){}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params:ParamMap)=>{
      this.courseId=Number(params.get("courseId"));
      this.subCourseId=Number(params.get("subCourseId"));


      this._bitcodeService.getData().subscribe(data=>{
        this.subCourseName=data.course[this.courseId-1].subCourse[this.subCourseId-1].subCourseName;
        this.subCourseDetail=data.course[this.courseId-1].subCourse[this.subCourseId-1].subCourseDetails;
      });

    })    
  }

}
