import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css'],
})
export class SingleQuestionComponent {
  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}
  question!: Question;
  ngOnInit() {
    this.getSingleQuestion();
  }
  getSingleQuestion() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.question = this.questionService.getSingleQuestion(id);
    } else {
      throw new Error('ID parameter not found');
    }
  }
  onSubmit(form: NgForm) {
    let newComment = new Comment(form.value.text, new Date(), form.value.email);
    console.log(newComment);
    form.resetForm();
    this.question.comments.push(newComment);
  }
}
