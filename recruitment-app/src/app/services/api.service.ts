import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import Candidate from '../models/Candidate';
import Interview from '../models/Interview';
import Skill from '../models/Skill';

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
        return this.httpClient.get<Interview[]>(this.url + 'interviews');
    }

    deleteInterview(idInterview: string){
        return this.httpClient.delete<string>(this.url + 'interviews/delete/'+idInterview);
    }

    getCandidates() {
        return this.httpClient.get<Candidate[]>(this.url + 'candidates');
    }

    updateCandidate(candidate: Candidate) {
        return this.httpClient.put<Candidate>(this.url + 'candidates/update', candidate.CandidateFormatProperties());
    }

    deleteCandidate(uuidCandidate: string){
        return this.httpClient.delete<string>(this.url + 'candidates/delete/'+uuidCandidate);
    }

    getSkills() {
        return this.httpClient.get<Skill[]>(this.url + 'skills');
    }

}
