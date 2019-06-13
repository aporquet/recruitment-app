import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import { RecruitersComponent } from './components/recruiters/recruiters.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CandidateRowComponent } from './components/candidate-row/candidate-row.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecruitersComponent,
        InterviewsComponent,
        CandidatesComponent,
        CandidateRowComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
