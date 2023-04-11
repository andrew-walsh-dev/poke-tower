// __tests__/Battle.test.ts
import Pokemon from "../src/models/Pokemon";
import Move from "../src/models/Move";
import Type from "../src/models/Type";
import Battle from "../src/models/Battle";

describe("Battle", () => {
  let playerTeam: Pokemon[];
  let opponentTeam: Pokemon[];

  beforeEach(() => {
    const move1 = new Move("Tackle", Type.Normal, 40);
    const move2 = new Move("Scratch", Type.Normal, 40);
    const move3 = new Move("Ember", Type.Fire, 40);
    const move4 = new Move("Water Gun", Type.Water, 40);
    const moves = [move1, move2, move3, move4];

    const playerPokemon1 = new Pokemon(
      "Pokemon1",
      Type.Normal,
      moves,
      100,
      50,
      0,
      1,
      false,
      { min: 1, max: 10 },
      "player1.png"
    );
    const playerPokemon2 = new Pokemon(
      "Pokemon2",
      Type.Fire,
      moves,
      100,
      100,
      0,
      1,
      false,
      { min: 1, max: 10 },
      "player2.png"
    );
    const opponentPokemon1 = new Pokemon(
      "Opponent1",
      Type.Fire,
      moves,
      100,
      50,
      0,
      1,
      false,
      { min: 1, max: 10 },
      "opponent1.png"
    );
    const opponentPokemon2 = new Pokemon(
      "Opponent2",
      Type.Normal,
      moves,
      100,
      100,
      0,
      1,
      false,
      { min: 1, max: 10 },
      "opponent2.png"
    );

    playerTeam = [playerPokemon1, playerPokemon2];
    opponentTeam = [opponentPokemon1, opponentPokemon2];
  });

  test("Battle starts with player turn", () => {
    const battle = new Battle(playerTeam, opponentTeam);
    expect((battle as any).turn).toBe("player");
  });

  test("Player wins the battle", () => {
    const battle = new Battle(playerTeam, opponentTeam);
    opponentTeam[0].takeDamage(opponentTeam[0].getMaxHP());
    opponentTeam[1].takeDamage(opponentTeam[1].getMaxHP());
    battle.startBattle();
    expect(battle.getWinner()).toBe("player");
  });

  test("Opponent wins the battle", () => {
    const battle = new Battle(playerTeam, opponentTeam);
    playerTeam[0].takeDamage(playerTeam[0].getMaxHP());
    playerTeam[1].takeDamage(playerTeam[1].getMaxHP());
    battle.startBattle();
    expect(battle.getWinner()).toBe("opponent");
  });

  test("Battle alternates turns between player and opponent", () => {
    const battle = new Battle(playerTeam, opponentTeam);
    const playerTurn = (battle as any).turn;
    (battle as any).doTurn();
    const opponentTurn = (battle as any).turn;
    (battle as any).doTurn();
    const playerTurnAgain = (battle as any).turn;

    expect(playerTurn).toBe("player");
    expect(opponentTurn).toBe("opponent");
    expect(playerTurnAgain).toBe("player");
  });

  test("Super effective move deals more damage", () => {
    const attacker = playerTeam[0];
    const defender = opponentTeam[0];
    const superEffectiveMove = attacker
      .getMoveset()
      .find(
        (move) => move.getEffectivenessMultiplier(defender.getType()) === 2
      );
    const normalMove = attacker
      .getMoveset()
      .find(
        (move) => move.getEffectivenessMultiplier(defender.getType()) === 1
      );

    if (!superEffectiveMove || !normalMove) {
      throw new Error("Unable to find super effective or normal moves");
    }

    const battle = new Battle(playerTeam, opponentTeam);
    const superEffectiveDamage = (battle as any).getPotentialDamage(
      attacker,
      defender,
      superEffectiveMove
    );
    const normalDamage = (battle as any).getPotentialDamage(
      attacker,
      defender,
      normalMove
    );

    expect(superEffectiveDamage).toBeGreaterThan(normalDamage);
  });

  test("Pokemon with higher attack stat deals more damage", () => {
    const attacker1 = playerTeam[0];
    const attacker2 = playerTeam[1];
    const defender = opponentTeam[0];
    const move = attacker1.getMoveset()[0];

    // Ensure attacker2 has a higher attack stat
    if (attacker1.getAttack() >= attacker2.getAttack()) {
      throw new Error(
        "attacker2 should have a higher attack stat than attacker1"
      );
    }

    const battle = new Battle(playerTeam, opponentTeam);
    const damage1 = (battle as any).getPotentialDamage(
      attacker1,
      defender,
      move
    );
    const damage2 = (battle as any).getPotentialDamage(
      attacker2,
      defender,
      move
    );

    expect(damage2).toBeGreaterThan(damage1);
  });
  test("Pokemon should be able to attack and deal damage", () => {
    const attacker = playerTeam[0];
    const defender = opponentTeam[0];
    const move = attacker.getMoveset()[0];
    const battle = new Battle(playerTeam, opponentTeam);
    const initialDefenderHP = defender.getCurrentHP();
    (battle as any).applyDamage(attacker, defender, move);
    expect(defender.getCurrentHP()).toBeLessThan(initialDefenderHP);
  });
});
