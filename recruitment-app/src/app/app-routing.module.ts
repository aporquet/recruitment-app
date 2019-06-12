import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecruitersComponent} from './components/recruiters/recruiters.component';

const routes: Routes = [
    {path: 'recruiters', component: RecruitersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
