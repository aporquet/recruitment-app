import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import Interview from '../../models/Interview';
import {InterviewService} from '../../services/interview/interview.service';

@Component({
    selector: 'app-interviews',
    templateUrl: './interviews.component.html',
})
export class InterviewsComponent implements OnInit {

    constructor(private apiService: ApiService, private interviewService: InterviewService) {
    }

    ngOnInit(): void {
        this.apiService.getInterviews().subscribe((response: Interview[]) => {
            this.interviewService.interviews = response;
        });
    }

}
