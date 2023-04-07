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

}

export default Pokemon;