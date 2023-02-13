import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-container',
  templateUrl: './banner-container.component.html',
  styleUrls: ['./banner-container.component.css']
})
export class BannerContainerComponent implements OnInit{

  @Input() bannerImage:string="";


  ngOnInit():void{
    console.log(this.bannerImage)
  }

}
