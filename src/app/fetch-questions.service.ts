import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class FetchQuestionsService {

  constructor(public _http:Http) {

  }
public data=[];
  getquestions()
  {
    return this._http.get("https://opentdb.com/api.php?amount=50").map(res=>res.json());

  }
}
