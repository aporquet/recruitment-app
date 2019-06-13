export default class Skill {

    private _idSkill: number;
    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get idSkill(): number {
        return this._idSkill;
    }


}
