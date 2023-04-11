import Move from "../src/models/Move";
import Type from "../src/models/Type";
import * as path from "path";
import * as fs from "fs";

interface MoveData {
  name: string;
  type: string;
  power: number;
}

const movesDataPath = path.join(__dirname, "../data/moves.json");
const movesData: MoveData[] = JSON.parse(fs.readFileSync(movesDataPath, "utf-8"));

describe("Move", () => {
  const sampleMoveData = movesData[0];
  const sampleMove = new Move(
    sampleMoveData.name,
    Type[sampleMoveData.type as keyof typeof Type],
    sampleMoveData.power
  );

  describe("constructor", () => {
    it("should create a Move with the correct properties", () => {
      expect(sampleMove.getName()).toBe(sampleMoveData.name);
      expect(sampleMove.getType()).toBe(Type[sampleMoveData.type as keyof typeof Type]);
      expect(sampleMove.getPower()).toBe(sampleMoveData.power);
    });
  });

  describe("getName", () => {
    it("should return the name of the move", () => {
      expect(sampleMove.getName()).toBe(sampleMoveData.name);
    });
  });

  describe("getType", () => {
    it("should return the type of the move", () => {
      expect(sampleMove.getType()).toBe(Type[sampleMoveData.type as keyof typeof Type]);
    });
  });

  describe("getPower", () => {
    it("should return the base power of the move", () => {
      expect(sampleMove.getPower()).toBe(sampleMoveData.power);
    });
  });

  describe("getEffectivenessMultiplier", () => {
    const typeCombinations = [
      { attacker: Type.Fire, defender: Type.Grass, expected: 2 },
      { attacker: Type.Fire, defender: Type.Water, expected: 0.5 },
      { attacker: Type.Fire, defender: Type.Fire, expected: 0.5 },
      { attacker: Type.Water, defender: Type.Fire, expected: 2 },
      { attacker: Type.Water, defender: Type.Grass, expected: 0.5 },
      { attacker: Type.Water, defender: Type.Water, expected: 0.5 }
    ];

    typeCombinations.forEach(({ attacker, defender, expected }) => {
      it(`should return the correct effectiveness multiplier for attacker type: ${Type[attacker]}, defender type: ${Type[defender]}`, () => {
        const move = new Move("Test Move", attacker, 100);
        const actualMultiplier = move.getEffectivenessMultiplier(defender);
        expect(actualMultiplier).toBe(expected);
      });
    });
  });
});
