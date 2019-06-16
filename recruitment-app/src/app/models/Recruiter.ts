import Skill from './Skill';

export default class Recruiter {

    private _uuid:string;
    private _firstName: string;
    private _lastName: string;
    private _mail:string;
    private _experience:string;
    private _enterprise:string;
    private _skills: Skill[];
    private _keySkills: Skill[];

    constructor(uuid:string, firstName:string, lastName:string, mail:string, experience:string, enterprise:string, skills:Skill[], keySkills:Skill[]){
        this._uuid = uuid;
        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail;
        this._experience = experience;
        this._enterprise  =enterprise;
        this._skills = skills;
        this._keySkills = keySkills;
    }

    get keySkills(): Skill[] {
        return this._keySkills;
    }
    get skills(): Skill[] {
        return this._skills;
    }
    get enterprise(): string {
        return this._enterprise;
    }
    get experience(): string {
        return this._experience;
    }
    get mail(): string {
        return this._mail;
    }
    get lastName(): string {
        return this._lastName;
    }
    get firstName(): string {
        return this._firstName;
    }
    get uuid(): string {
        return this._uuid;
    }

}
