import { Component } from '@angular/core';

@Component({
  selector: 'app-advantage-bitcode',
  templateUrl: './advantage-bitcode.component.html',
  styleUrls: ['./advantage-bitcode.component.css']
})
export class AdvantageBitcodeComponent {

  id=0;

  percentage:number=0;
  receivePercentage(event:number){
    this.percentage=event;
  }

}
