import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecruitersComponent} from './components/recruiters/recruiters.component';
import {InterviewsComponent} from './components/interviews/interviews.component';

const routes: Routes = [
    {path: 'recruiters', component: RecruitersComponent},
    {path: 'interviews', component: InterviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
