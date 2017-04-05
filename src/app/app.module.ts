import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FetchQuestionsService} from "./fetch-questions.service";
import { CountComponent } from './count/count.component';
import { CorrectComponent } from './correct/correct.component';
import { AttemptedComponent } from './attempted/attempted.component';
import { DisableDirective } from './disable.directive';


@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    CorrectComponent,
    AttemptedComponent,
    DisableDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FetchQuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
