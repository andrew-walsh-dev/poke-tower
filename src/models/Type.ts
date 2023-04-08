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

type Effectiveness = "superEffective" | "notVeryEffective" | "normal" | "immune";

interface TypeEffectivenessMatrix {
  [key: string]: {
    [key: string]: Effectiveness;
  };
}

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
