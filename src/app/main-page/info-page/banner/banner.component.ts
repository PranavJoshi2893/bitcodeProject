import { Component, OnInit } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  images:any[]=[]

  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit(): void {
    this._bitcodeService.getBannerImages().subscribe(data=>{
      this.images=data;
      console.log(this.images);
    });
  }

}
