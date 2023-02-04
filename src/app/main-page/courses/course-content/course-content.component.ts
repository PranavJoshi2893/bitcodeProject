import { Component, OnInit } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit{

  arr:any[]=[];
  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit(): void {
    this._bitcodeService.getData().subscribe(data=>this.arr=data)
  }

}
