import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent {

  dates: string[] = [];

  constructor(public _state: StateService) { }

  ngOnInit(): void {

    this._state.allfixture();

    const today = new Date();
    for (let i = 0; i < 8; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      this.dates.push(date.toISOString().split('T')[0]);
    }

    this.demo()


  }




  get_date(i: any) {

    this._state.selected_date = this.dates[i]
    console.log(this._state.selected_date, "selected date ")

    this._state.date_wise_data = this._state.all_Fixtures_data.filter(item => item.localDateTime === this._state.selected_date)
    console.log(this._state.date_wise_data, "check Datewise Data")

    this.add_legue_id_data()

    // this._state.date_wise_data.forEach((item) => {
    //   if (!this._state.filterVar.includes(item.LeagueId)) {
    //     this._state.leagueIds.push({ id: item.LeagueId, leagueName: item.LeagueName, country: item.Country });
    //     this._state.filterVar.push(item.LeagueId);
    //   }
    //   console.log(this._state.leagueIds)
    // });


  }

  add_legue_id_data() {
    this._state.date_wise_data.forEach((item) => {
      if (!this._state.filterVar.includes(item.LeagueId)) {
        this._state.leagueIds.push({ id: item.LeagueId, leagueName: item.LeagueName, country: item.Country });
        this._state.filterVar.push(item.LeagueId);
      }
      // console.log(this._state.leagueIds)
    });

  }

  demo() {

    setTimeout(() => {
      document.getElementById('id0')?.click();

    }, 2000);


    // this._state.selected_date = this.dates[0]
    // console.log(this._state.selected_date, "selected date demo")

    // this._state.date_wise_data = this._state.all_Fixtures_data.filter(item => item.localDateTime === this._state.selected_date)
    // console.log(this._state.date_wise_data, "check Datewise Data")

    // let date = new Date();
    // let cuurentdate = (date.toISOString().split('T')[0]);
    // console.log(this._state.all_Fixtures_data)
    // this._state.date_wise_data = this._state.all_Fixtures_data.filter(item => item.localDateTime === cuurentdate)
    // console.log(this._state.date_wise_data, cuurentdate, "check cuurent  Data")
    // this.add_legue_id_data();
  }

}

