import { Component, OnInit } from '@angular/core';
import { Question } from "../../shared/models/question";
import { Answer } from "../../shared/models/answer";

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.css']
})
export class QuestionsCreateComponent implements OnInit {

  question: Question;  

  //public questionTitle: string;
  //public answer: [];

  constructor() { }

  ngOnInit() {
    //this.question = new Question();
    //this.question.question = this.questionTitle;
  }

  addAnswer() {
   /* let answer = new Answer();
    this.question.answers.push(answer);
    console.log(this.question);
    */


  }

}
