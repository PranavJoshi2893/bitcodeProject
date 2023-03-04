import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.css']
})
export class IndividualCourseComponent implements OnInit {

  constructor(private _bitcodeService:BitcodeService,private _route:ActivatedRoute,private _router:Router){}

  array:any;
  courseId=0;
  subCourseId=0;
  ngOnInit():void{
    this._route.paramMap.subscribe((param:ParamMap)=>{
      this.courseId = Number(param.get('courseId'));
      this.subCourseId =Number(param.get('subCourseId'));

      this._bitcodeService.getData().subscribe(data=>{
        this.array=data.course[this.courseId-1].subCourse[this.subCourseId-1].courseContent;
      })


    })
  }

}
