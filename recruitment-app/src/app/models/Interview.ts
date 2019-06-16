import Candidate from './Candidate';
import Recruiter from './Recruiter';

export default class Interview {

    private readonly _idInterview: number;
    private _localDateTime: string;
    private _recruiterFullDto: Recruiter;
    private _candidateFullDto: Candidate;

    constructor(idInterview:number, localDateTime: string, recruiterFullDto:Recruiter, candidateFullDto:Candidate) {
        this._idInterview = idInterview;
        this._localDateTime = localDateTime;
        this._recruiterFullDto = recruiterFullDto;
        this._candidateFullDto = candidateFullDto;
    }

    get candidateFullDto(): Candidate {
        return this._candidateFullDto;
    }

    set candidateFullDto(value: Candidate) {
        this._candidateFullDto = value;
    }

    get recruiterFullDto(): Recruiter {
        return this._recruiterFullDto;
    }

    set recruiterFullDto(value: Recruiter) {
        this._recruiterFullDto = value;
    }

    get localDateTime(): string {
        return this._localDateTime;
    }

    set localDateTime(value: string) {
        this._localDateTime = value;
    }

    get idInterview(): number {
        return this._idInterview;
    }

    formatToDelete() {
        return {
            idInterview: this.idInterview,
            uuidRecruiter: this.recruiterFullDto.uuid,
            dateInterview: this.localDateTime
        };
    }

}



