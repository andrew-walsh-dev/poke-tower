import Type, { typeEffectivenessMatrix } from "./Type";
import movesData from "../../data/moves.json";

/**
 * Represents a single move that a Pokemon can use in battle.
 */
class Move {
  private name: string;
  private type: Type;
  private power: number;

  /**
   * Constructs a new move with the given properties.
   *
   * @param name The name of the move.
   * @param type The type of the move, as specified by the Type enum.
   * @param power The base power of the move, which determines its damage output.
   */
  constructor(name: string, type: Type, power: number) {
    this.name = name;
    this.type = type;
    this.power = power;
  }

  /**
   *Loads all the moves from the movesData and returns a Map containing all the moves.
   *The move names are used as keys, and the Move instances are the values.
   *@returns A Map containing all the moves with their names as keys and the Move instances as values.
   **/
  public static getAll(): Map<string, Move> {
    const moves = new Map<string, Move>();
    for (const moveData of movesData) {
      const move = new Move(moveData.name, Type[moveData.type as keyof typeof Type], moveData.power);
      moves.set(moveData.name, move);
    }
    return moves;
  }

  /**
   * Returns the name of this move.
   *
   * @returns The name of this move.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Returns the type of this move.
   *
   * @returns The type of the move, as specified by the Type enum.
   */
  public getType(): Type {
    return this.type;
  }

  /**
   * Returns the base power of this move.
   *
   * @returns The base power of the move, which determines its damage output.
   */
  public getPower(): number {
    return this.power;
  }

  /**
   * Determines the effectiveness multiplier of this move against a defender's type.
   *
   * @param defenderType The type of the defending Pokemon.
   * @returns The effectiveness multiplier, which is used to calculate the damage dealt.
   */
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
