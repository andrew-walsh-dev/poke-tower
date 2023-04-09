import Move from "./Move";
import Type from "./Type";

/**
 * Represents a single Pokemon, with its properties, moveset, and battle-related methods.
 */
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

  /**
   * Constructs a new Pokemon with the given properties.
   *
   * @param name The name of the Pokemon.
   * @param type The type of the Pokemon, as specified by the Type enum.
   * @param moveset An array of Move objects representing the Pokemon's moveset.
   * @param maxHP The maximum hit points (HP) of the Pokemon.
   * @param attack The attack stat of the Pokemon.
   * @param exp The experience points of the Pokemon.
   * @param level The level of the Pokemon.
   * @param sprite The URL of the sprite image for the Pokemon.
   */
  constructor(
    name: string,
    type: Type,
    moveset: Move[],
    maxHP: number,
    attack: number,
    exp: number,
    level: number,
    sprite: string
  ) {
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

  /**
   * Returns the name of the Pokemon.
   *
   * @returns The name of the Pokemon.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Returns the maximum hit points (HP) of this Pokemon.
   *
   * @returns The maximum hit points (HP) of the Pokemon.
   */
  public getMaxHP(): number {
    return this.maxHP;
  }

  /**
   * Returns the type of this Pokemon.
   *
   * @returns The type of the Pokemon, as specified by the Type enum.
   */
  public getType(): Type {
    return this.type;
  }

  /**
   * Returns the attack stat of this Pokemon.
   *
   * @returns The attack stat of the Pokemon.
   */
  public getAttack(): number {
    return this.attack;
  }

  /**
   * Returns the moveset of this Pokemon.
   *
   * @returns An array of Move objects representing the Pokemon's moveset.
   */
  public getMoveset(): Move[] {
    return this.moveset;
  }

  /**
   * Checks if the Pokemon has fainted (i.e., its current HP is less than or equal to 0).
   *
   * @returns A boolean value indicating whether the Pokemon has fainted or not.
   */
  public isFainted(): boolean {
    return this.currentHP <= 0;
  }

  /**
   * Applies damage to the Pokemon by decreasing its current HP by the given amount.
   *
   * @param amount The amount of damage to be applied to the Pokemon.
   */
  public takeDamage(amount: number): void {
    this.currentHP -= amount;
    if (this.currentHP < 0) {
      this.currentHP = 0;
    }
  }
}

export default Pokemon;
