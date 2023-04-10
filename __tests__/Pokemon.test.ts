import * as fs from "fs";
import * as path from "path";
import Pokemon from "../src/models/Pokemon";
import Move from "../src/models/Move";
import Type from "../src/models/Type";

const testDataPath = path.join(__dirname, "../data/pokemon.json");
const testData = JSON.parse(fs.readFileSync(testDataPath, "utf-8"));

describe("Pokemon", () => {
  const sampleMoves = testData.map(
    (move: any) => new Move(move.name, move.type, move.power)
  );

  const samplePokemonData = testData[0];
  const samplePokemon = new Pokemon(
    samplePokemonData.name,
    samplePokemonData.type,
    sampleMoves.slice(0, 2),
    samplePokemonData.maxHP,
    samplePokemonData.attack,
    samplePokemonData.exp,
    samplePokemonData.level,
    samplePokemonData.isStarter,
    samplePokemonData.floorRange,
    samplePokemonData.sprite
  );

  describe("constructor", () => {
    it("should create a Pokemon with the correct properties", () => {
      expect(samplePokemon.getName()).toBe(samplePokemonData.name);
      expect(samplePokemon.getType()).toBe(samplePokemonData.type);
      expect(samplePokemon.getMoveset()).toEqual(sampleMoves.slice(0, 2));
      expect(samplePokemon.getMaxHP()).toBe(samplePokemonData.maxHP);
      expect(samplePokemon.getAttack()).toBe(samplePokemonData.attack);
      expect(samplePokemon.getExp()).toBe(samplePokemonData.exp);
      expect(samplePokemon.getLevel()).toBe(samplePokemonData.level);
      expect(samplePokemon.getIsStarter()).toBe(samplePokemonData.isStarter);
      expect(samplePokemon.getFloorRange()).toBe(samplePokemonData.floorRange);
      expect(samplePokemon.getSprite()).toBe(samplePokemonData.sprite);
    });
  });

  describe("expForLevel", () => {
    it("should calculate the correct experience for a given level", () => {
      const level = 10;
      const expectedExp = 500;
      expect(Pokemon.expForLevel(level)).toBe(expectedExp);
    });
  });

  describe("levelUp", () => {
    it("should increase the level", () => {
      const initialLevel = samplePokemon.getLevel();
      const newLevel = initialLevel + 1;

      samplePokemon.levelUp();

      expect(samplePokemon.getLevel()).toBe(newLevel);
    });
  });

  describe("setMoveset", () => {
    it("should update the Pokemon's moveset", () => {
      const oldMoveset = samplePokemon.getMoveset();
      const newMoveset = [
        new Move("Tackle", Type.Normal, 50),
        new Move("Water Gun", Type.Water, 40),
      ];
      samplePokemon.setMoveset(newMoveset);
      expect(samplePokemon.getMoveset()).toEqual(newMoveset);
      expect(samplePokemon.getMoveset()).not.toEqual(oldMoveset);
    });
  });

  describe("takeDamage", () => {
    it("should decrease the Pokemon's current HP by the given amount", () => {
      const oldHP = samplePokemon.getCurrentHP();
      const damage = 30;
      samplePokemon.takeDamage(damage);
      expect(samplePokemon.getCurrentHP()).toBe(oldHP - damage);
    });
  });

  describe("isFainted", () => {
    it("should return true if the Pokemon's current HP is 0 or less", () => {
      const oldHP = samplePokemon.getCurrentHP();
      const damage = oldHP;
      samplePokemon.takeDamage(damage);
      expect(samplePokemon.isFainted()).toBe(true);
    });
  });
});
