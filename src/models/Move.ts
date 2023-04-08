import Type from "./Type";

class Move {
    private name: string;
    private type: Type;
    private power: number;

    public getType(): Type {
        return this.type;
    }

    public getPower(): number {
        return this.power;
    }
}

export default Move;