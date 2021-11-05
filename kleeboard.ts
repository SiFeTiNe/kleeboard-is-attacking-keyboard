interface Player {
    name: string;
    hp: number;
    mp: number;
    sp: number;
    attack(player: Player): void;
}

class SwordMan implements Player {
    private _name: string;
    private _hp: number;
    private _mp: number;
    private _sp: number;

    constructor (name: string, hp: number, mp: number, sp: number) {
        this._name = name;
        this._hp = hp;
        this._mp = mp;
        this._sp = sp;
    }

    public attack(player: Player) {
        player.hp -= 10;
    }

    public get name() {
        return this._name;
    }

    public set name(newName: string) {
        this._name = newName;
    }

    public get hp() {
        return this._hp;
    }

    public set hp(newHp: number) {
        this._hp = newHp;
    }

    public get mp() {
        return this._mp;
    }

    public set mp(newMp: number) {
        this._mp  = newMp;
    }

    public get sp() {
        return this._sp;
    }

    public set sp(newSp: number) {
        this._sp = newSp;
    }
}

let kleeboard: SwordMan = new SwordMan("kleeboard", 120, 27, 12);
let keyboard: SwordMan = new SwordMan("kleeboard", 100, 30, 10);

console.log(keyboard.hp);
kleeboard.attack(keyboard);
console.log(keyboard.hp);
