import { Component } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-courses-container',
  templateUrl: './courses-container.component.html',
  styleUrls: ['./courses-container.component.css']
})
export class CoursesContainerComponent {

  courses:any=[];

  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit():void{
    this._bitcodeService.getCardData().subscribe(data=>this.courses=data[1]);
  }

}
