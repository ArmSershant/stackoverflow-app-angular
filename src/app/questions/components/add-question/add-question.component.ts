import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent {
  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}
  public categories: string[] = ['Frontend', 'Backend', 'UI/UX'];
  public questions: Question[] = [];
  ngOnInit() {
    this.getQuestions();
  }
  getQuestions() {
    this.questions = this.questionService.getQuestions();
  }
  onSubmit(form: NgForm) {
    let max = 1000;
    let newQuestion = new Question(
      Math.floor(Math.random() * max).toString(),
      form.value.text,
      form.value.category,
      0,
      []
    );
    form.resetForm();
    this.questionService.add(newQuestion);
    this.questionService.setQuestions(this.questions);
    console.log(newQuestion);
    console.log(this.questionService.getQuestions());
    this.router.navigate(['/all-questions']);
  }
}
