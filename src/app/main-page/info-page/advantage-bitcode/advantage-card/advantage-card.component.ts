import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantage-card',
  templateUrl: './advantage-card.component.html',
  styleUrls: ['./advantage-card.component.css']
})
export class AdvantageCardComponent {

  @Input() images:string="";

  @Input() description:string="";

}
