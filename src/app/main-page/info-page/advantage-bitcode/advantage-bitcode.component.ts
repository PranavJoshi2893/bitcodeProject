import { Component, OnInit } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-advantage-bitcode',
  templateUrl: './advantage-bitcode.component.html',
  styleUrls: ['./advantage-bitcode.component.css']
})
export class AdvantageBitcodeComponent implements OnInit{

  advantages:any[]=[]
  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit(): void {
    this._bitcodeService.getAdvantageData().subscribe(data=>this.advantages=data);
  }


}
