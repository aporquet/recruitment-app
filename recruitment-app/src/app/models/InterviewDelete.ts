export default class InterviewDelete {

    private _idInterview: number;
    private _localDateTime: string;
    private _uuidRecruiter: string;

    constructor(idInterview:number, localDateTime: string, uuidRecruiter:string){
        this._idInterview = idInterview;
        this._localDateTime = localDateTime;
        this._uuidRecruiter = uuidRecruiter;
    }

    set idInterview(value: number) {
        this._idInterview = value;
    }

    get uuidRecruiter(): string {
        return this._uuidRecruiter;
    }
    set uuidRecruiter(value: string) {
        this._uuidRecruiter = value;
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

}
