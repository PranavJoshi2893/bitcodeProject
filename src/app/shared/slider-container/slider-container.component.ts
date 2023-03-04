import { Component, Input, OnInit } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.css']
})
export class SliderContainerComponent implements OnInit{

  @Input() id=0
  advantages:any=[];

  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit():void{
    this._bitcodeService.getCardData().subscribe(data=>this.advantages=data[0]);
  }

}
