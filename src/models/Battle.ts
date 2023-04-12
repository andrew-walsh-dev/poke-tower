import Move from "./Move";
import Pokemon from "./Pokemon";
import Type, { typeEffectivenessMatrix } from "./Type";

/**
 * The Battle class represents a Pokemon battle between a player's team and an opponent's team.
 */
class Battle {
  private playerTeam: Pokemon[];
  private opponentTeam: Pokemon[];
  private turn: "player" | "opponent";
  private playerAttackerIndex: number;
  private opponentAttackerIndex: number;

  /**
   * Constructor for the Battle class.
   * @param playerTeam An array of Pokemon representing the player's team.
   * @param opponentTeam An array of Pokemon representing the opponent's team.
   */
  constructor(playerTeam: Pokemon[], opponentTeam: Pokemon[]) {
    this.playerTeam = playerTeam;
    this.opponentTeam = opponentTeam;
    this.playerAttackerIndex = 0;
    this.opponentAttackerIndex = 0;
    this.turn = "player";
  }

  /**
   * Returns the effectiveness multiplier for a move based on the move type and defender type.
   * @param moveType The type of the attacking move.
   * @param defenderType The type of the defending Pokemon.
   * @returns A number representing the effectiveness multiplier.
   */
  private getMoveEffectivenessMultiplier(
    moveType: Type,
    defenderType: Type
  ): number {
    const effectiveness: string =
      typeEffectivenessMatrix[moveType][defenderType];
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

  /**
   * Calculates the potential damage of a move against a defending Pokemon.
   * @param attacker The attacking Pokemon.
   * @param defender The defending Pokemon.
   * @param move The move being used by the attacker.
   * @returns A number representing the potential damage.
   */
  private getPotentialDamage(attacker: Pokemon, defender: Pokemon, move: Move) {
    const baseMovePower = move.getPower();
    const effectivenessMultiplier: number = this.getMoveEffectivenessMultiplier(
      move.getType(),
      defender.getType()
    );
    const adjustedDamage: number =
      (baseMovePower + attacker.getAttack()) * effectivenessMultiplier;
    return adjustedDamage;
  }

  /**
   * Applies damage to a defending Pokemon based on the attacker's move.
   * @param attacker The attacking Pokemon.
   * @param defender The defending Pokemon.
   * @param move The move being used by the attacker.
   */
  private applyDamage(attacker: Pokemon, defender: Pokemon, move: Move): void {
    const damage = this.getPotentialDamage(attacker, defender, move);
    defender.takeDamage(damage);
  }

  /**
   * Determines the best move for an attacker against a team of defenders.
   * @param attacker The attacking Pokemon.
   * @param defenders An array of defending Pokemon.
   * @returns An object containing the best move and the target defender.
   */
   private getBestMove(
    attacker: Pokemon,
    defenders: Pokemon[]
  ): { move: Move; target: Pokemon } {
    let moveset: Move[] = attacker.getMoveset();
    let bestMove: Move = moveset[0];
    let targetDefender: Pokemon = defenders[0];
    let maxDamage: number = 0;
  
    for (const move of moveset) {
      // Only consider non-fainted defenders
      const nonFaintedDefenders = defenders.filter((defender) => !defender.isFainted());
  
      for (const defender of nonFaintedDefenders) {
        const potentialDamage = this.getPotentialDamage(
          attacker,
          defender,
          move
        );
        if (potentialDamage > maxDamage) {
          maxDamage = potentialDamage;
          bestMove = move;
          targetDefender = defender;
        }
      }
    }
    return { move: bestMove, target: targetDefender };
  }
  

  /**

Checks if all Pokemon on a team have fainted.
@param team An array of Pokemon representing a team.
@returns A boolean indicating whether all Pokemon on the team have fainted.
*/
  private isTeamFainted(team: Pokemon[]): boolean {
    return team.every((pokemon) => pokemon.isFainted());
  }

  /**
   * Determines if the battle is over, based on the state of both teams.
   * @returns A boolean indicating whether the battle is over.
   */
  private isBattleOver(): boolean {
    return (
      this.isTeamFainted(this.playerTeam) ||
      this.isTeamFainted(this.opponentTeam)
    );
  }

  /**
   * Determines the winner of the battle.
   * @returns A string indicating the winner: "player", "opponent", or null if the battle is not yet over.
   */
  public getWinner(): "player" | "opponent" | null {
    if (this.isTeamFainted(this.playerTeam)) {
      return "opponent";
    } else if (this.isTeamFainted(this.opponentTeam)) {
      return "player";
    } else {
      return null;
    }
  }

  /**
   * The main battle method, which starts the battle and continues until one team wins.
   */
  public startBattle(): void {
    while (!this.isBattleOver()) {
      this.doTurn();
    }

    const winner = this.getWinner();
    if (winner === "player") {
      console.log("Player wins!");
    } else if (winner === "opponent") {
      console.log("Opponent wins!");
    }
  }

  private getNextAttacker(team: Pokemon[], attackerIndex: number): number {
    const teamSize = team.length;
    let nextAttackerIndex = (attackerIndex + 1) % teamSize;
  
    while (team[nextAttackerIndex].isFainted()) {
      nextAttackerIndex = (nextAttackerIndex + 1) % teamSize;
    }
  
    return nextAttackerIndex;
  }

  /**
   * Executes a turn in the battle, with the current attacker using their best move against the target defender.
   */
   private doTurn(): void {
    if (this.turn === "player") {
      const attacker: Pokemon = this.playerTeam[this.playerAttackerIndex];
      const moveInfo = this.getBestMove(attacker, this.opponentTeam);
      this.applyDamage(attacker, moveInfo.target, moveInfo.move);
      this.playerAttackerIndex = this.getNextAttacker(this.playerTeam, this.playerAttackerIndex);
      this.turn = "opponent";
    } else {
      const attacker: Pokemon = this.opponentTeam[this.opponentAttackerIndex];
      const moveInfo = this.getBestMove(attacker, this.playerTeam);
      this.applyDamage(attacker, moveInfo.target, moveInfo.move);
      this.opponentAttackerIndex = this.getNextAttacker(this.opponentTeam, this.opponentAttackerIndex);
      this.turn = "player";
    }
  } 
}

export default Battle;
