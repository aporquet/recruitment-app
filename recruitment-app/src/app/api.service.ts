import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import Candidate from './models/Candidate';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private url = environment.url;

    constructor(private httpClient: HttpClient) {
    }

    getRecruiters() {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test-user:s3cur3d')});
        return this.httpClient.get(this.url + 'recruiters', {headers});
    }

    getInterviews() {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test-user:s3cur3d')});
        return this.httpClient.get(this.url + 'interviews', {headers});
    }

    getCandidates() {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test-user:s3cur3d')});
        return this.httpClient.get<Candidate[]>(this.url + 'candidates', {headers});
    }

    updateCandidate(candidate: any) {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test-user:s3cur3d')});
        headers.set('Content-Type', 'application/json; charset=utf-8');
        console.log(candidate);
        return this.httpClient.put(this.url + 'candidates/update', {candidate: candidate}, {headers});
    }

    getSkills() {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test-user:s3cur3d')});
        return this.httpClient.get(this.url + 'skills', {headers});
    }

}
