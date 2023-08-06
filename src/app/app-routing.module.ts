import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateSelectorComponent } from './componant/date-selector/date-selector.component';
import { MatchListComponent } from './componant/match-list/match-list.component';
import { MatchDetailsComponent } from './componant/match-details/match-details.component';
import { HomeComponent } from './componant/home/home.component';


const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'matches/:matchId', component: MatchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
