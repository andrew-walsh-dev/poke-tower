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
type Effectiveness = "superEffective" | "notVeryEffective" | "normal" | "immune";

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
    [Type.Grass]: "normal",
  },
  [Type.Fire]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "notVeryEffective",
    [Type.Water]: "notVeryEffective",
    [Type.Grass]: "superEffective",
  },
  [Type.Water]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "superEffective",
    [Type.Water]: "notVeryEffective",
    [Type.Grass]: "notVeryEffective",
  },
  [Type.Grass]: {
    [Type.Normal]: "normal",
    [Type.Fire]: "notVeryEffective",
    [Type.Water]: "superEffective",
    [Type.Grass]: "notVeryEffective",
  },
};

export default Type;
