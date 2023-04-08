import Type, { typeEffectivenessMatrix } from "./Type";

class Move {
  private name: string;
  private type: Type;
  private power: number;

  constructor(name: string, type: Type, power: number) {
    this.name = name;
    this.type = type;
    this.power = power;
  }

  public getType(): Type {
    return this.type;
  }

  public getPower(): number {
    return this.power;
  }

  public getEffectivenessMultiplier(defenderType: Type): number {
    const effectiveness: string =
      typeEffectivenessMatrix[this.getType()][defenderType];
    switch (effectiveness) {
      case "superEffective":
        return 2;
      case "normal":
        return 1;
      case "notVeryEffective":
        return 0.5;
      case "immune":
        return 0;
    }
    return 1;
  }
}

export default Move;
