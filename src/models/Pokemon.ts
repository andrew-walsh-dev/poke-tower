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

  // Getters

  /**
   * Returns the name of the Pokemon.
   *
   * @returns The name of the Pokemon.
   */
  public getName(): string {
    return this.name;
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
   * Returns the moveset of this Pokemon.
   *
   * @returns An array of Move objects representing the Pokemon's moveset.
   */
  public getMoveset(): Move[] {
    return this.moveset;
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
   * Returns the current hit points (HP) of this Pokemon.
   *
   * @returns The current hit points (HP) of the Pokemon.
   */
  public getCurrentHP(): number {
    return this.currentHP;
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
   * Returns the experience points of this Pokemon.
   *
   * @returns The experience points of the Pokemon.
   */
  public getExp(): number {
    return this.exp;
  }

  /**
   * Returns the level of this Pokemon.
   *
   * @returns The level of the Pokemon.
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * Returns the URL of the sprite image for this Pokemon.
   *
   * @returns The URL of the sprite image for the Pokemon.
   */
  public getSprite(): string {
    return this.sprite;
  }

  // Setters
  /**

Sets the name of the Pokemon.
@param name The new name of the Pokemon.
*/
  public setName(name: string): void {
    this.name = name;
  }
  /**
    
    Sets the type of the Pokemon.
    @param type The new type of the Pokemon, as specified by the Type enum.
    */
  public setType(type: Type): void {
    this.type = type;
  }
  /**
    
    Sets the moveset of the Pokemon.
    @param moveset An array of Move objects representing the new moveset of the Pokemon.
    */
  public setMoveset(moveset: Move[]): void {
    this.moveset = moveset;
  }
  /**
    
    Sets the maximum hit points (HP) of the Pokemon.
    @param maxHP The new maximum hit points (HP) of the Pokemon.
    */
  public setMaxHP(maxHP: number): void {
    this.maxHP = maxHP;
  }
  /**
    
    Sets the current hit points (HP) of the Pokemon.
    @param currentHP The new current hit points (HP) of the Pokemon.
    */
  public setCurrentHP(currentHP: number): void {
    this.currentHP = currentHP;
  }
  /**
    
    Sets the attack stat of the Pokemon.
    @param attack The new attack stat of the Pokemon.
    */
  public setAttack(attack: number): void {
    this.attack = attack;
  }
  /**
    
    Sets the experience points of the Pokemon.
    @param exp The new experience points of the Pokemon.
    */
  public setExp(exp: number): void {
    this.exp = exp;
  }
  /**
    
    Sets the level of the Pokemon.
    @param level The new level of the Pokemon.
    */
  public setLevel(level: number): void {
    this.level = level;
  }
  /**
    
    Sets the URL of the sprite image for the Pokemon.
    @param sprite The new URL of the sprite image for the Pokemon.
    */
  public setSprite(sprite: string): void {
    this.sprite = sprite;
  }
  /**
    
    Checks if the Pokemon has fainted (i.e., its current HP is less than or equal to 0).
    @returns A boolean value indicating whether the Pokemon has fainted or not.
    */
  public isFainted(): boolean {
    return this.currentHP <= 0;
  }
  /**
    
    Applies damage to the Pokemon by decreasing its current HP by the given amount.
    @param amount The amount of damage to be applied to the Pokemon.
    */
  public takeDamage(amount: number): void {
    this.currentHP -= amount;
    if (this.currentHP < 0) {
      this.currentHP = 0;
    }
  }
}
export default Pokemon;
