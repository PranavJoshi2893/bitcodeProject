import { Component, Input } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.css']
})
export class SliderContainerComponent{

  @Input() id:number=0


  courses:any=[];
  advantages:any=[];

  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit():void{
    this._bitcodeService.getCardData().subscribe(data=>this.advantages=data[0]);
    this._bitcodeService.getCardData().subscribe(data=>this.courses=data[1]);
  }

}
