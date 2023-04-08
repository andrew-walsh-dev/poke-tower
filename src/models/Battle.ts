import Move from "./Move";
import Pokemon from "./Pokemon";
import Type, { typeEffectivenessMatrix } from "./Type";

class Battle {
  private playerTeam: Pokemon[];
  private opponentTeam: Pokemon[];
  private turn: string;
  private playerAttackerIndex: number;
  private opponentAttackerIndex: number;

  constructor(playerTeam: Pokemon[], opponentTeam: Pokemon[]) {
    this.playerTeam = playerTeam;
    this.opponentTeam = opponentTeam;
    this.playerAttackerIndex = 0;
    this.opponentAttackerIndex = 0;
    this.turn = "player";
  }

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

  private getPotentialDamage(attacker: Pokemon, defender: Pokemon, move: Move) {
    const baseMovePower = move.getPower();
    const effectivenessMultiplier: number = this.getMoveEffectivenessMultiplier(
      move.getType(),
      defender.getType()
    );
    const attackMultiplier: number = 1 + 0.01 * attacker.getAttack();
    const adjustedDamage: number =
      baseMovePower * attackMultiplier * effectivenessMultiplier;
    return adjustedDamage;
  }

  private applyDamage(attacker: Pokemon, defender: Pokemon, move: Move): void {
    const damage = this.getPotentialDamage(attacker, defender, move);
    defender.takeDamage(damage);
  }

  public getBestMove(attacker: Pokemon, defenders: Pokemon[]): Move {
    let moveset: Move[] = attacker.getMoveset();
    let bestMove: Move = moveset[0];
    let maxDamage = 0;

    for (const move of attacker.getMoveset()) {
      for (const defender of defenders) {
        const potentialDamage = this.getPotentialDamage(
          attacker,
          defender,
          move
        );

        if (potentialDamage > maxDamage) {
          maxDamage = potentialDamage;
          bestMove = move;
        }
      }
    }

    return bestMove;
  }

  public doTurn(): void {
    if (this.turn === "player") {
      const attacker: Pokemon = this.playerTeam[this.playerAttackerIndex]; 
    }
    else {
      const attacker: Pokemon = this.opponentTeam[this.opponentAttackerIndex];        
    }
  }
}

export default Battle;
