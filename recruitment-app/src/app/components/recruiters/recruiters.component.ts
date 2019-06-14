import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'app-recruiters',
    templateUrl: './recruiters.component.html'
})
export class RecruitersComponent implements OnInit {

    recruiters: {}[] = [];

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.apiService.getRecruiters().subscribe((response: {}[]) => {
            for (const recruiter of response) {
                this.recruiters.push(recruiter);
            }
        });
    }

}
