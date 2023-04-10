import Battle from "./Battle";
import Move from "./Move";
import Pokemon from "./Pokemon";

class Game {
  private allPokemon: Pokemon[];
  private allMoves: Map<string, Move>;
  private playerParty: Pokemon[];
  private currentFloor: number;

  constructor() {
    this.playerParty = [];
    this.addPokemonToPlayerParty = this.addPokemonToPlayerParty.bind(this);
    this.getCurrentFloor = this.getCurrentFloor.bind(this);
    this.play = this.play.bind(this);
    this.currentFloor = 1;
    this.allMoves = Move.getAll();
    this.allPokemon = Pokemon.getAll(this.allMoves);
  }

  public async play(): Promise<void> {
    let gameOver = false;

    while (!gameOver) {
      console.log(`Entering floor ${this.getCurrentFloor()}`);

      const winner = await this.doNextBattle();

      if (winner === "player") {
        console.log(`Player has cleared floor ${this.getCurrentFloor()}`);
        this.incrementFloor();
      } else if (winner === "opponent") {
        console.log(
          `Player has been defeated on floor ${this.getCurrentFloor()}`
        );
        console.log("Returning to home...");
        gameOver = true;
        this.currentFloor = 1;
      }
    }
  }

  public async doNextBattle(): Promise<"player" | "opponent" | null> {
    const nextOpponents: Pokemon[] = this.generateEnemyForFloor(
      this.getCurrentFloor(),
      this.allPokemon
    );
    const battle = new Battle(this.playerParty, nextOpponents);
    battle.startBattle();
    const winner = await battle.getWinner();

    if (winner === "player") {
      this.giveTeamExpGains(this.playerParty, nextOpponents);
      console.log("Player wins the battle!");
    } else if (winner === "opponent") {
      console.log("Opponent wins the battle!");
    }

    return winner;
  }

  public giveTeamExpGains(playerParty: Pokemon[], opponents: Pokemon[]): void {
    const averageEnemyLevel: number = this.getAverageTeamLevel(opponents);
    const expToGain: number = Pokemon.calculateExpGained(100, averageEnemyLevel);
    for (const teamMember of playerParty) {
      teamMember.gainExp(expToGain);
    }
  }

  public getAverageTeamLevel(team: Pokemon[]): number {
    let sum = 0;
    for (let pokemon of team) {
      sum += pokemon.getLevel();
    }
    return sum / team.length;
  }

  healPlayerParty = (): void => {
    for (const pokemon of this.getPlayerParty()) {
      let maxHP: number = pokemon.getMaxHP();
      pokemon.setCurrentHP(maxHP);
    }
  }

  public getCurrentFloor(): number {
    return this.currentFloor;
  }

  public incrementFloor(): void {
    this.currentFloor++;
  }

  public getPlayerParty(): Pokemon[] {
    return this.playerParty;
  }

  public addPokemonToPlayerParty(pokemon: Pokemon): void {
    this.playerParty.push(pokemon);
  }

  /**
   * Generates an array of enemy Pokemon for a given floor.
   *
   * @param floor - The floor number for which the enemy Pokemon are being generated.
   * @param allPokemon - An array of all possible Pokemon in the game.
   * @returns An array of enemy Pokemon for the specified floor, with their stats scaled accordingly.
   *
   * @example
   * // Generate enemy Pokemon for floor 5
   * const enemiesOnFloor5 = generateEnemyForFloor(5, allPokemon);
   */
  private generateEnemyForFloor(
    floor: number,
    allPokemon: Pokemon[]
  ): Pokemon[] {
    // Filter the Pokemon that can appear on this floor based on their floor range
    const availablePokemon = allPokemon.filter(
      (pokemon) =>
        floor >= pokemon.getFloorRange().min &&
        floor <= pokemon.getFloorRange().max
    );

    const enemies: Pokemon[] = [];
    const enemyCount = Math.ceil((floor % 10) / 2);

    for (let i = 0; i < enemyCount; i++) {
      // Select a random Pokemon from the available Pokemon for this floor
      const randomIndex = Math.floor(Math.random() * availablePokemon.length);
      const selectedPokemon = availablePokemon[randomIndex];

      // Calculate the new stats based on the floor level
      const scaledLevel = Math.floor(floor * 0.5) + selectedPokemon.getLevel();
      const scaledMaxHP =
        Math.floor(floor * 0.5) * 10 + selectedPokemon.getMaxHP();
      const scaledAttack =
        Math.floor(floor * 0.5) + selectedPokemon.getAttack();
      const requiredExp = Pokemon.expForLevel(scaledLevel);

      // Create a new instance of the Pokemon with the scaled stats
      const enemy = new Pokemon(
        selectedPokemon.getName(),
        selectedPokemon.getType(),
        selectedPokemon.getMoveset(),
        scaledMaxHP,
        scaledAttack,
        requiredExp,
        scaledLevel,
        selectedPokemon.getIsStarter(),
        selectedPokemon.getFloorRange(),
        selectedPokemon.getSprite()
      );

      enemies.push(enemy);
    }

    return enemies;
  }
}

export default Game;
