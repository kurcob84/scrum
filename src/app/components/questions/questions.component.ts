import { Component, OnInit } from '@angular/core';
import { QuestionService } from  '../../services/questions/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers:  [ QuestionService ]
})
export class QuestionsComponent implements OnInit {

  private questions: Array<object> = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe((data:  Array<object>) => {
      this.questions = data;
  });
  }

}
