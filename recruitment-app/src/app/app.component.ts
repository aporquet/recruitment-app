import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'recruitment-app';

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.call();
    }

    call() {
        this.apiService.getInterviews().subscribe(response => {
                console.log(response);
            }
        );
    }
}
