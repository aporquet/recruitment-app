import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import Candidate from '../models/Candidate';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private url = environment.url;

    constructor(private httpClient: HttpClient) {
    }

    getRecruiters() {
        return this.httpClient.get(this.url + 'recruiters');
    }

    getInterviews() {
        return this.httpClient.get(this.url + 'interviews');
    }

    getCandidates() {
        return this.httpClient.get<Candidate[]>(this.url + 'candidates');
    }

    updateCandidate(candidate: Candidate) {
        return this.httpClient.put<Candidate>(this.url + 'candidates/update', candidate.toJson());
    }

    getSkills() {
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('test-user:s3cur3d')});
        return this.httpClient.get(this.url + 'skills', {headers});
    }

}
