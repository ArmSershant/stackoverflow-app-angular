import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { SingleQuestionComponent } from './components/single-question/single-question.component';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SearchPipe } from './pipes/search.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SingleQuestionComponent,
    AllQuestionsComponent,
    AddQuestionComponent,
    HomeComponent,
    TruncatePipe,
    SearchPipe,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    QuestionsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    SingleQuestionComponent,
    AllQuestionsComponent,
    AddQuestionComponent,
    HomeComponent,
  ],
})
export class QuestionsModule {}
