import Move from "./Move";
import Type from "./Type";

class Pokemon {
    private name: string;
    private type: Type;
    private moveset: Move[];
    private maxHP: number;
    private currentHP: number;
    private attack: number;
    private exp: number;
    private level: number;
    private sprite: string;

    constructor(name: string, type: Type, moveset: Move[], maxHP: number, attack: number, exp: number, level: number, sprite: string) {
        this.name = name;
        this.type = type;
        this.moveset = moveset;
        this.maxHP = maxHP;
        this.currentHP = maxHP;
        this.attack = attack;
        this.exp = exp;
        this.level = level;
        this.sprite = sprite;
    }
}

export default Pokemon;