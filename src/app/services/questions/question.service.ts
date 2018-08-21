import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin} from 'rxjs';  // change to new RxJS 6 import syntax

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class QuestionService {

  API_URL  =  'http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  getQuestions() {
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return this.http.get(this.API_URL + '/questions');
}
}
