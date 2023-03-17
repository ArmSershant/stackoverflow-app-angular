import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';
import { HomeComponent } from './components/home/home.component';
import { SingleQuestionComponent } from './components/single-question/single-question.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'all-questions', component: AllQuestionsComponent },
  { path: 'single-question/:id', component: SingleQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
