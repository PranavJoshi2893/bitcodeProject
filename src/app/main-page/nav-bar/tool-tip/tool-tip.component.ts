import { Component, Input } from '@angular/core';
import { CoursesModel } from 'src/app/model/courses-model';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css']
})
export class ToolTipComponent {

  @Input() arr:CoursesModel[]=[];

}
