import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent {

  constructor(public _route: ActivatedRoute, public _state: StateService , private _rest:RestService) {


  }

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      this._state.matchId = params['matchId'];
      console.log(this._state.matchId, "checking MatchId");
    })

    this._state.match_id_wise_data = this._state.date_wise_data.filter(item => item.MatchId === this._state.matchId)
    console.log(this._state.match_id_wise_data, "check MAtch wise  Data")

    this._state.all_selection_leg()
    this._state.all_market_();
  }


  onMarketSelectionChange(event: any) {

    this._state.MarketId = event.target.value;
    console.log('Selected MarketId:', this._state.MarketId);
    this.call_function()

  }

  onLegSelectionChange(event: any) {

    this._state.legId = event.target.value;

    console.log('Selected LegId:', this._state.legId);
    this.call_function();
  }

  call_function() {
    this._state.all_BetBuilderBets()
  }



}
