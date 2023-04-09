enum Type {
  Normal = "Normal",
  Fire = "Fire",
  Water = "Water",
  Electric = "Electric",
  Grass = "Grass",
  Ice = "Ice",
  Fighting = "Fighting",
  Poison = "Poison",
  Ground = "Ground",
  Flying = "Flying",
  Psychic = "Psychic",
  Bug = "Bug",
  Rock = "Rock",
  Ghost = "Ghost",
  Dragon = "Dragon",
  Dark = "Dark",
  Steel = "Steel",
  Fairy = "Fairy",
}

/**
 * Type effectiveness values used in the typeEffectivenessMatrix.
 */
type Effectiveness =
  | "superEffective"
  | "notVeryEffective"
  | "normal"
  | "immune";

/**
 * Represents a matrix that describes the effectiveness of one type of move against another type.
 * Keys are attacker types, and values are objects with defender types as keys and effectiveness as values.
 */
interface TypeEffectivenessMatrix {
  [key: string]: {
    [key: string]: Effectiveness;
  };
}

/**
 * The type effectiveness matrix, describing the effectiveness of one type of move against another type.
 * The keys represent the attacker's type, and the values are objects with the defender's type as keys and effectiveness as values.
 */
export const typeEffectivenessMatrix: TypeEffectivenessMatrix = {
  [Type.Normal]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "immune",
    [Type.Dragon]: "normal",
    [Type.Dark]: "normal",
    [Type.Steel]: "normal",
    [Type.Fairy]: "normal",
  },
  [Type.Fire]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "notVeryEffective",
    [Type.Water]: "notVeryEffective",
    [Type.Electric]: "normal",
    [Type.Grass]: "superEffective",
    [Type.Ice]: "superEffective",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "superEffective",
    [Type.Rock]: "notVeryEffective",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "notVeryEffective",
    [Type.Dark]: "normal",
    [Type.Steel]: "superEffective",
    [Type.Fairy]: "normal",
  },
  [Type.Water]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "superEffective",
    [Type.Water]: "notVeryEffective",
    [Type.Electric]: "normal",
    [Type.Grass]: "notVeryEffective",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "superEffective",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "superEffective",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "notVeryEffective",
    [Type.Dark]: "normal",
    [Type.Steel]: "normal",
    [Type.Fairy]: "normal",
  },
  [Type.Electric]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "superEffective",
    [Type.Electric]: "notVeryEffective",
    [Type.Grass]: "notVeryEffective",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "immune",
    [Type.Flying]: "superEffective",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "notVeryEffective",
    [Type.Dark]: "normal",
    [Type.Steel]: "normal",
    [Type.Fairy]: "normal",
  },
  [Type.Grass]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "notVeryEffective",
    [Type.Water]: "superEffective",
    [Type.Electric]: "normal",
    [Type.Grass]: "notVeryEffective",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "notVeryEffective",
    [Type.Ground]: "superEffective",
    [Type.Flying]: "notVeryEffective",
    [Type.Psychic]: "normal",
    [Type.Bug]: "notVeryEffective",
    [Type.Rock]: "superEffective",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "notVeryEffective",
    [Type.Dark]: "normal",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "normal",
  },
  [Type.Ice]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "notVeryEffective",
    [Type.Water]: "notVeryEffective",
    [Type.Electric]: "normal",
    [Type.Grass]: "superEffective",
    [Type.Ice]: "notVeryEffective",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "superEffective",
    [Type.Flying]: "superEffective",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "superEffective",
    [Type.Dark]: "normal",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "normal",
  },
  [Type.Fighting]: {
    [Type.Normal]: "superEffective",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "superEffective",
    [Type.Fighting]: "normal",
    [Type.Poison]: "notVeryEffective",
    [Type.Ground]: "normal",
    [Type.Flying]: "notVeryEffective",
    [Type.Psychic]: "notVeryEffective",
    [Type.Bug]: "notVeryEffective",
    [Type.Rock]: "superEffective",
    [Type.Ghost]: "immune",
    [Type.Dragon]: "normal",
    [Type.Dark]: "superEffective",
    [Type.Steel]: "superEffective",
    [Type.Fairy]: "notVeryEffective",
  },
  [Type.Poison]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "superEffective",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "notVeryEffective",
    [Type.Ground]: "notVeryEffective",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "notVeryEffective",
    [Type.Ghost]: "notVeryEffective",
    [Type.Dragon]: "normal",
    [Type.Dark]: "normal",
    [Type.Steel]: "immune",
    [Type.Fairy]: "superEffective",
  },
  [Type.Ground]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "superEffective",
    [Type.Water]: "normal",
    [Type.Electric]: "superEffective",
    [Type.Grass]: "notVeryEffective",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "superEffective",
    [Type.Ground]: "normal",
    [Type.Flying]: "immune",
    [Type.Psychic]: "normal",
    [Type.Bug]: "notVeryEffective",
    [Type.Rock]: "superEffective",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "normal",
    [Type.Dark]: "normal",
    [Type.Steel]: "superEffective",
    [Type.Fairy]: "normal",
  },
  [Type.Flying]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "notVeryEffective",
    [Type.Grass]: "superEffective",
    [Type.Ice]: "normal",
    [Type.Fighting]: "superEffective",
    [Type.Poison]: "normal",
    [Type.Ground]: "immune",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "superEffective",
    [Type.Rock]: "notVeryEffective",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "normal",
    [Type.Dark]: "normal",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "normal",
  },
  [Type.Psychic]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "normal",
    [Type.Fighting]: "superEffective",
    [Type.Poison]: "superEffective",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "notVeryEffective",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "notVeryEffective",
    [Type.Dragon]: "normal",
    [Type.Dark]: "immune",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "normal",
  },
  [Type.Bug]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "notVeryEffective",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "superEffective",
    [Type.Ice]: "normal",
    [Type.Fighting]: "notVeryEffective",
    [Type.Poison]: "notVeryEffective",
    [Type.Ground]: "normal",
    [Type.Flying]: "notVeryEffective",
    [Type.Psychic]: "superEffective",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "notVeryEffective",
    [Type.Dragon]: "normal",
    [Type.Dark]: "superEffective",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "notVeryEffective",
  },
  [Type.Rock]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "superEffective",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "superEffective",
    [Type.Fighting]: "notVeryEffective",
    [Type.Poison]: "normal",
    [Type.Ground]: "notVeryEffective",
    [Type.Flying]: "superEffective",
    [Type.Psychic]: "normal",
    [Type.Bug]: "superEffective",
    [Type.Rock]: "normal",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "normal",
    [Type.Dark]: "normal",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "normal",
  },
  [Type.Ghost]: {
    [Type.Normal]: "immune",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "superEffective",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "superEffective",
    [Type.Dragon]: "normal",
    [Type.Dark]: "notVeryEffective",
    [Type.Steel]: "normal",
    [Type.Fairy]: "normal",
  },
  [Type.Dragon]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "normal",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "superEffective",
    [Type.Dark]: "normal",
    [Type.Steel]: "normal",
    [Type.Fairy]: "notVeryEffective",
  },
  [Type.Dark]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "normal",
    [Type.Fighting]: "notVeryEffective",
    [Type.Poison]: "normal",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "superEffective",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "superEffective",
    [Type.Dragon]: "normal",
    [Type.Dark]: "notVeryEffective",
    [Type.Steel]: "normal",
    [Type.Fairy]: "notVeryEffective",
  },
  [Type.Steel]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "notVeryEffective",
    [Type.Water]: "normal",
    [Type.Electric]: "notVeryEffective",
    [Type.Grass]: "normal",
    [Type.Ice]: "superEffective",
    [Type.Fighting]: "normal",
    [Type.Poison]: "normal",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "superEffective",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "normal",
    [Type.Dark]: "normal",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "superEffective",
  },
  [Type.Fairy]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "normal",
    [Type.Water]: "normal",
    [Type.Electric]: "normal",
    [Type.Grass]: "normal",
    [Type.Ice]: "normal",
    [Type.Fighting]: "superEffective",
    [Type.Poison]: "notVeryEffective",
    [Type.Ground]: "normal",
    [Type.Flying]: "normal",
    [Type.Psychic]: "normal",
    [Type.Bug]: "normal",
    [Type.Rock]: "normal",
    [Type.Ghost]: "normal",
    [Type.Dragon]: "superEffective",
    [Type.Dark]: "superEffective",
    [Type.Steel]: "notVeryEffective",
    [Type.Fairy]: "normal",
  },
};

export default Type;
