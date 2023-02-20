import { Component} from '@angular/core';


@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent {

  id:number=1;

  percentage:number=0;
  receivePercentage(event:number){
    this.percentage=event;
  }

}
