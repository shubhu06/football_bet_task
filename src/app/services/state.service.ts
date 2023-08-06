import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { DatePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class StateService {

  all_Fixtures_data: any[] = [];
  date_wise_data: any[] = [];
  match_id_wise_data: any[] = [];
  all_selection_legs: any[] = [];
  all_market_data: any[] = [];
  all_BetBuilderBet_data: any;

  selected_date: any;
  matchId: any;
  legId: any;
  MarketId: any;

  leagueIds: any[] = [];
  filterVar: any[] = [];


  constructor(private _rest: RestService, public _date: DatePipe) { }

  allfixture() {
    this._rest.get_all_fixtures().subscribe((resp: any) => {
      this.all_Fixtures_data = resp
      // add local time into data
      this.all_Fixtures_data.forEach(match => {
        const utcDateTime = new Date(match.KickOffUtc);
        let date = utcDateTime.toLocaleString();
        match.localDateTime = this._date.transform(date, 'yyyy-MM-dd')
      });
      console.log(this.all_Fixtures_data, "all Fixture Data...");
    }, err => console.log(err));
  }


  all_selection_leg() {
    this._rest.get_all_selection().subscribe((resp: any) => {
      this.all_selection_legs = resp
      console.log(this.all_selection_legs, "selection legs data checked");
    }, err => console.log(err))
  }

  all_market_() {
    this._rest.get_all_market().subscribe((resp: any) => {
      this.all_market_data = resp
      console.log(this.all_market_data, "market data checked");
    }, err => console.log(err))
  }

  all_BetBuilderBets() {
    this._rest.get_all_BetBuilderBets({ legId: this.legId, matchId: this.matchId, MarketId: this.MarketId }).subscribe((resp: any) => {
      this.all_BetBuilderBet_data = resp;
      console.log(this.all_BetBuilderBet_data, " betbuilders data checked");
    });
  }

}
