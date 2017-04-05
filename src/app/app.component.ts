import {Component, ViewChild, ElementRef} from '@angular/core';
import {FetchQuestionsService} from "./fetch-questions.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchQuestionsService],
})
export class AppComponent {

 @ViewChild('checkbox1') checkbox1:ElementRef;
  @ViewChild('checkbox2') checkbox2:ElementRef;
  @ViewChild('checkbox3') checkbox3:ElementRef;
  @ViewChild('checkbox4') checkbox4:ElementRef;

  title = 'app works!';
  public data = [];
  question: String = "";
  options: any = []
  random;
  attempted;
  count = 0;
  response;
  res='';

  constructor(public fetch: FetchQuestionsService,public elem:ElementRef) {
  }

  ngOnInit() {




    this.calldata();
   // console.log("called");
  }


public change(num) {
  if (num == 1) {
    if (this.checkbox1.nativeElement.checked) {
      this.res = this.checkbox1.nativeElement.name;
      console.log(this.res);
      this.checkbox2.nativeElement.disabled = true;
      this.checkbox3.nativeElement.disabled = true;
      this.checkbox4.nativeElement.disabled = true;

    }
    else {
      console.log("HELLLOAOSAS");
      this.checkbox2.nativeElement.disabled = false;
      this.checkbox3.nativeElement.disabled = false;
      this.checkbox4.nativeElement.disabled = false;

    }

  }
  else if (num == 2) {
    if (this.checkbox2.nativeElement.checked) {
      this.res = this.checkbox2.nativeElement.name;
      console.log(this.res);
      this.checkbox1.nativeElement.disabled = true;
      this.checkbox3.nativeElement.disabled = true;
      this.checkbox4.nativeElement.disabled = true;

    }
    else {
      console.log("HELLLOAOSAS");
      this.checkbox1.nativeElement.disabled = false;
      this.checkbox3.nativeElement.disabled = false;
      this.checkbox4.nativeElement.disabled = false;

    }

  }
  else if (num == 3) {
    if (this.checkbox3.nativeElement.checked) {
      this.res = this.checkbox3.nativeElement.name;
      console.log(this.res);
      this.checkbox1.nativeElement.disabled = true;
      this.checkbox2.nativeElement.disabled = true;
      this.checkbox4.nativeElement.disabled = true;

    }
    else {
      console.log("HELLLOAOSAS");
      this.checkbox2.nativeElement.disabled = false;
      this.checkbox1.nativeElement.disabled = false;
      this.checkbox4.nativeElement.disabled = false;

    }
  }
  else {
    if (this.checkbox4.nativeElement.checked) {

      this.res = this.checkbox4.nativeElement.name;
      console.log(this.res);
      this.checkbox1.nativeElement.disabled = true;
      this.checkbox2.nativeElement.disabled = true;
      this.checkbox3.nativeElement.disabled = true;

    }
    else {
      console.log("HELLLOAOSAS");
      this.checkbox1.nativeElement.disabled = false;
      this.checkbox2.nativeElement.disabled = false;
      this.checkbox3.nativeElement.disabled = false;

    }

  }
}
  public  calldata() {
    this.fetch.getquestions().subscribe(data => {
      this.data = data.results;
      this.question = this.data[0].question;
      this.options = this.data[0].incorrect_answers;
      this.options.push(this.data[0].correct_answer);
      //console.log(this.data);
    })


  }

  public getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  public next(){

    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;

    this.checkbox1.nativeElement.disabled = false;
    this.checkbox2.nativeElement.disabled = false;
    this.checkbox4.nativeElement.disabled = false;
    this.checkbox3.nativeElement.disabled = false;

    this.random = this.getRandomInt(50, 0);
    this.attempted = this.random;
    this.count++;
    this.question = this.data[this.random].question;
    this.options = this.data[this.random].incorrect_answers;
    this.options.push(this.data[this.random].correct_answer);

  }
}
