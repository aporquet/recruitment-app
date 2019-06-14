import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-interviews',
    templateUrl: './interviews.component.html',
})
export class InterviewsComponent implements OnInit {

    interviews: {}[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.getInterviews().subscribe((response: {}[]) => {
            for (const interview of response) {
                this.interviews.push(interview);
            }
        });
    }

}
