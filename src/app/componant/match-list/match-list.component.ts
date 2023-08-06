import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';


@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {

  constructor(public _state:StateService){}

  ngOnInit(): void {

    // this._state.filterDataByDate()
  }


}
