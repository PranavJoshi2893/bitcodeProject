import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantage-card',
  templateUrl: './advantage-card.component.html',
  styleUrls: ['./advantage-card.component.css']
})
export class AdvantageCardComponent implements OnInit {

  @Input() images:string="";

  @Input() description:string="";

  ngOnInit(){
    console.log(this.images);
  }

}
