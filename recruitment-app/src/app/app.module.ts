import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import { RecruitersComponent } from './components/recruiters/recruiters.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CandidateRowComponent } from './components/candidate-row/candidate-row.component';
import {HttpHeaderInterceptor} from './infra/http-interceptor';
import { InterviewRowComponent } from './components/interview-row/interview-row.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ModalCandidateComponent } from './components/modal-candidate/modal-candidate.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecruitersComponent,
        InterviewsComponent,
        CandidatesComponent,
        CandidateRowComponent,
        InterviewRowComponent,
        SkillsComponent,
        ModalCandidateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: HttpHeaderInterceptor,
            multi   : true
        }
    ],
    entryComponents: [
        ModalCandidateComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
