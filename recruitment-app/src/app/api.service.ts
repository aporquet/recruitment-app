import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private url = environment.url;

    constructor(private httpClient: HttpClient) {
    }

    getRecruiters() {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('test-user:s3cur3d') });
        return this.httpClient.get(this.url + 'recruiters', { headers });
    }

    getInterviews() {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('test-user:s3cur3d') });
        return this.httpClient.get(this.url + 'interviews', { headers });
    }

}
