import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecruitersComponent} from './components/recruiters/recruiters.component';
import {InterviewsComponent} from './components/interviews/interviews.component';
import {CandidatesComponent} from './components/candidates/candidates.component';
import {SkillsComponent} from './components/skills/skills.component';

const routes: Routes = [
    {path: 'recruiters', component: RecruitersComponent},
    {path: 'interviews', component: InterviewsComponent},
    {path: 'candidates', component: CandidatesComponent},
    {path: 'skills', component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
