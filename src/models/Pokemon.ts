import Move from "./Move";
import Type from "./Type";
import pokemonData from "../../data/pokemon.json";

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
  private isStarter: boolean;
  private floorRange: { min: number; max: number };
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
   * @param isStarter Whether the pokemon is a starter option
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
    isStarter: boolean,
    floorRange: { min: number; max: number },
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
    this.isStarter = isStarter;
    this.floorRange = floorRange;
    this.sprite = sprite;
    this.gainExp = this.gainExp.bind(this);
  }

  /**
   * Calculates the experience needed for a given level using a cubic formula.
   *
   * @param level - The target level for which the experience threshold is being calculated.
   * @returns The experience needed to reach the specified level.
   *
   */
  public static expForLevel(level: number): number {
    return Math.floor(level ** 3 / 2);
  }

  /**
   * Calculates the experience points (EXP) gained for winning a Pokémon battle.
   *
   * @param baseExp - The base experience yield.
   * @param opponentLevel - The level of the defeated Pokémon.
   * @returns The amount of EXP gained by the winning Pokémon.
   */
  public static calculateExpGained(
    baseExp: number,
    opponentLevel: number
  ): number {
    const expGained = (baseExp * opponentLevel) / 7;
    return Math.floor(expGained) + 1;
  }

  /**
   * Increases the Pokemon's level by 1
   */
  public levelUp(): void {
    const level: number = this.getLevel();
    const maxHP: number = this.getMaxHP();
    const currentHP: number = this.getCurrentHP();
    const attack: number = this.getAttack();
    this.setLevel(level + 1);
    this.setMaxHP(maxHP + 10);
    this.setCurrentHP(currentHP + 10);
    this.setAttack(attack + 10);
  }

  /**
   * This method is used to increase the experience points (exp) of a Pokémon instance by
   * the specified amount. The Pokémon's level will be checked after gaining the experience
   * and leveled up if necessary, which will result in increasing its maxHP and attack.
   *
   * @param amount - The amount of experience points to be added to the Pokémon's current exp.
   */
  public gainExp(amount: number): void {
    this.exp += amount;
    const expForNextLevel: number = Pokemon.expForLevel(this.getLevel() + 1);
    if (this.getExp() >= expForNextLevel) {
      this.levelUp();
    }
  }

  /**
   * Retrieves all Pokémon from the JSON data and converts them into Pokemon objects.
   * @param moves A Map containing all the Move objects, keyed by their names.
   * @returns An array of Pokemon objects representing all the Pokémon in the JSON data.
   */
  public static getAll(moves: Map<string, Move>): Pokemon[] {
    const pokemonList: Pokemon[] = [];
    for (const pokemonDatum of pokemonData) {
      const moveset = pokemonDatum.moves.map(
        (moveName: string) => moves.get(moveName) as Move
      );
      const pokemon = new Pokemon(
        pokemonDatum.name,
        Type[pokemonDatum.type as keyof typeof Type],
        moveset,
        pokemonDatum.maxHP,
        pokemonDatum.attack,
        pokemonDatum.exp,
        pokemonDatum.level,
        pokemonDatum.isStarter,
        pokemonDatum.floorRange,
        pokemonDatum.sprite
      );
      pokemonList.push(pokemon);
    }
    return pokemonList;
  }

  /**
   * Retrieves all starter Pokémon from the JSON data and converts them into Pokemon objects.
   * @param moves A Map containing all the Move objects, keyed by their names.
   * @returns An array of Pokemon objects representing all the starter Pokémon in the JSON data.
   */
  public static getStarters(moves: Map<string, Move>): Pokemon[] {
    const allPokemon = this.getAll(moves);
    const starters = allPokemon.filter((pokemon) => pokemon.getIsStarter());
    return starters;
  }

  // Getters

  /**
   * Returns the range of floors the enemy can appear on.
   *
   * @returns An object containing the min and max floors the Pokemon can spawn on.
   */
  public getFloorRange(): { min: number; max: number } {
    return this.floorRange;
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
   * Returns starter availability of this Pokemon.
   *
   * @returns The starter availability of the Pokemon.
   */
  public getIsStarter(): boolean {
    return this.isStarter;
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
