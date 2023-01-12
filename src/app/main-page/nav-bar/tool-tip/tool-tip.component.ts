import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css']
})
export class ToolTipComponent {

  @Input() arr:any[]=[];

  constructor(private _router:Router){}

  onSelect(ele:any,subEle:any){
    this._router.navigate(["/courses",ele,subEle])
  }
}
