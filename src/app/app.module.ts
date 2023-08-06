import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateSelectorComponent } from './componant/date-selector/date-selector.component';
import { MatchListComponent } from './componant/match-list/match-list.component';
import { MatchDetailsComponent } from './componant/match-details/match-details.component';
import { HomeComponent } from './componant/home/home.component';
import { DatePipe } from '@angular/common';
import { DisplayCardComponent } from './componant/display-card/display-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent,
    MatchListComponent,
    MatchDetailsComponent,
    HomeComponent,
    DisplayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
