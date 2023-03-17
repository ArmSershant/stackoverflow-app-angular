import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questions: Question[] = [
    new Question('101', 'how to use Redux/toolkit ?', 'Frontend', 10, []),
    new Question(
      '102',
      'how to create a db using google firebase ?',
      'Backend',
      15,
      []
    ),
  ];
  setQuestions(questions: Question[]) {
    return (this.questions = questions);
  }
  getQuestions() {
    return this.questions;
  }
  getSingleQuestion(id: string): Question {
    let foundQuestion = this.questions.find((question) => question.id === id);
    if (foundQuestion) {
      return foundQuestion;
    } else {
      throw new Error(`Question with ID ${id} not found`);
    }
  }
  add(question: Question) {
    this.questions.push(question);
  }
}
