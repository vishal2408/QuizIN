import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-attempted',
  templateUrl: './attempted.component.html',
  styleUrls: ['./attempted.component.css']
})
export class AttemptedComponent implements OnInit ,OnChanges{

  @Input("Attempted") Attempted;
  attemptedArr=[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.attemptedArr.push(this.Attempted);
  }

}
