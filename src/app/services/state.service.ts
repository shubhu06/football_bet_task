import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { DatePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class StateService {

  all_Fixtures_data: any[] = [];
  all_selection_legs: any[] = [];
  all_market_data: any[] = [];
  all_BetBuilderBet_data: any;

  selected_date: any;
  date_wise_data: any[] = [];

  match_id_wise_data: any[] = [];

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


        // this.current_date_data();  // call current date function
      });
      console.log(this.all_Fixtures_data, "state")


    }, err => console.log(err));
  }

  // current_date_data() {
  //   let date = new Date();
  //   let cuurentdate = (date.toISOString().split('T')[0]);
  //   console.log(this.all_Fixtures_data)
  //   this.date_wise_data = this.all_Fixtures_data.filter(item => item.localDateTime === cuurentdate)
  //   console.log(this.date_wise_data, cuurentdate, "check cuurent  Data")
  //   this.add_legue_id_data();
  // }

  // add_legue_id_data() {
  //   this.date_wise_data.forEach((item) => {
  //     if (!this.filterVar.includes(item.LeagueId)) {
  //       this.leagueIds.push({ id: item.LeagueId, leagueName: item.LeagueName, country: item.Country });
  //       this.filterVar.push(item.LeagueId);
  //     }
  //     console.log(this.leagueIds)
  //   });
  // }


  all_selection_leg() {
    this._rest.get_all_selection().subscribe((resp: any) => {
      this.all_selection_legs = resp
      console.log(this.all_selection_legs, "selection legs checked");
    }, err => console.log(err))
  }

  all_market_() {
    this._rest.get_all_market().subscribe((resp: any) => {
      this.all_market_data = resp
      console.log(this.all_market_data, "market data  checked");
    }, err => console.log(err))
  }

  all_BetBuilderBets() {
    this._rest.get_all_BetBuilderBets({ legId: this.legId, matchId: this.matchId, MarketId: this.MarketId }).subscribe((resp: any) => {
      this.all_BetBuilderBet_data = resp;
      console.log(this.all_BetBuilderBet_data, " betbuilders data checked");
    });
  }







}
