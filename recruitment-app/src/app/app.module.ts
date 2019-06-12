import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './components/header/header.component';
import { RecruitersComponent } from './components/recruiters/recruiters.component';
import { InterviewsComponent } from './components/interviews/interviews.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecruitersComponent,
        InterviewsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
