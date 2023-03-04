import { Component, OnInit } from '@angular/core';
import { BitcodeService } from 'src/app/bitcode.service';
import { BannerImage } from 'src/app/model/banner-image';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  images:BannerImage[]=[];

  constructor(private _bitcodeService:BitcodeService){}

  ngOnInit(): void {
    this._bitcodeService.getBannerImages().subscribe(data=>{
      this.images=data;
    });
  }

}
