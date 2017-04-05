import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-correct',
  templateUrl: './correct.component.html',
  styleUrls: ['./correct.component.css']
})
export class CorrectComponent implements OnInit {

  Responses=[];
  CorrectResponses=[];
  constructor() {
   }

  ngOnInit() {

  }
  ngOnChanges(changes){
    this.Responses.push(this.Response);
    console.log(this.Responses);
  }
  @Input("Correct") Correct;
  @Input("Response") Response;

}
