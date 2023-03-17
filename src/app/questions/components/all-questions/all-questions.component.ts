import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css'],
})
export class AllQuestionsComponent {
  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {}
  @Input() searchText: string = '';
  liked = false;
  questions: Question[] = [];
  ngOnInit() {
    this.getQuestions();
  }
  getQuestions() {
    this.questions = this.questionService.getQuestions();
    this.questions.sort((a, b) => b.countOfLikes - a.countOfLikes);
  }
  onLike(like: number) {
    let curr = 0;
    if (this.liked) {
      curr--;
    } else {
      like++;
      curr = like;
    }
    this.liked = !this.liked;
    console.log(like);
  }
}
