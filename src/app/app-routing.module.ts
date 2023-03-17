import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', redirectTo: '/home' },
  { path: 'all-questions', redirectTo: '/all-questions' },
  { path: 'add-question', redirectTo: '/add-question' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
