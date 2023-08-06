import { Component, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {

  constructor(public _state: StateService){

  }

  @Input() leageId: any;
  @Input() leageName: any;
  @Input() country: any;




}
