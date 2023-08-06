import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = "http://cms.bettorlogic.com/api/BetBuilder";

  constructor(private _http: HttpClient) { }


  get_all_fixtures() {
    return this._http.get(`${this.url}/GetFixtures?sports=1`)
  }

  get_all_selection(){
    return this._http.get(`${this.url}/GetSelections?sports=1`)
  }

  get_all_market(){
    return this._http.get(`${this.url}/GetMarkets?sports=1`)
  }

  get_all_BetBuilderBets(data:any){
    // console.log(data,"get");
    return this._http.get(`${this.url}/GetBetBuilderBets?sports=1&matchId=${data.matchId}&marketId=${data.MarketId}&legs=${data.legId}&language=en`)

  }



}
