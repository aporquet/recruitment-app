import Skill from './Skill';

export default class Candidate {
    get enterprise(): string {
        return this._enterprise;
    }

    set enterprise(value: string) {
        this._enterprise = value;
    }
    get keySkills(): Skill[] {
        return this._keySkills;
    }

    set keySkills(value: Skill[]) {
        this._keySkills = value;
    }
    get skills(): Skill[] {
        return this._skills;
    }

    set skills(value: Skill[]) {
        this._skills = value;
    }

    private _uuid: string;
    private _firstName: string;
    private _lastName: string;
    private _mail: string;
    private _experience: number;
    private _skills: Skill[];
    private _keySkills: Skill[];
    private _enterprise: string;

    constructor(uuid: string, firstName: string, lastName: string, mail: string, experience: number = 1, skills: Skill[] = [], keySkills: Skill[] = [], enterprise: string) {
        this._uuid = uuid;
        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail;
        this._experience = experience;
        this._skills = skills;
        this._keySkills = keySkills;
        this._enterprise = enterprise;
    }

    get uuid(): string {
        return this._uuid;
    }

    set uuid(value: string) {
        this._uuid = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get mail(): string {
        return this._mail;
    }

    set mail(value: string) {
        this._mail = value;
    }

    get experience(): number {
        return this._experience;
    }

    set experience(value: number) {
        this._experience = value;
    }

    CandidateFormatProperties() {
        return {
            uuid: this.uuid,
            firstName: this.firstName,
            lastName: this.lastName,
            mail: this.mail,
            experience: this.experience
        };
    }

    CandidateFormatUUIDPropertie(uuid:string){
        return {
            uuid: this.uuid
        };
    }

}


