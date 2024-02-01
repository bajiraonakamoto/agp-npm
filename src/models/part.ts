import { Cls } from './cls';

/** Stores the dominant and recessive genes of an Axie's part. */
export interface Part {
  d: PartGene;
  r1: PartGene;
  r2: PartGene;
  mystic: boolean;
}

/** Holds the data for a single gene of an Axie's part. */
export interface PartGene {
  partId: string;
  cls: Cls;
  specialGenes: string;
  type: PartType;
  name: string;
}

/** Represents each of an Axies body parts including: Eeyes, Ears, Mouth, Horn, Back, Tail. */
export enum PartType {
  Eyes = 'eyes',
  Ears = 'ears',
  Mouth = 'mouth',
  Horn = 'horn',
  Back = 'back',
  Tail = 'tail',
}

/** Represents the part skin of a given Axie. */
export enum PartSkin {
  Global = 'global',
  Mystic = 'mystic',
  Japan = 'japan',
  Xmas1 = 'xmas1',
  Xmas2 = 'xmas2',
  Bionic = 'bionic',
  Summer = 'summer',
  StrawberrySummer = 'strawberrySummer',
  VanillaSummer = 'vanillaSummer',
  Shiny = 'shiny',
  StrawberryShiny = 'strawberryShiny',
  VanillaShiny = 'vanillaShiny',
}

export const binPartSkinMap = new Map([
  ['0000', PartSkin.Global],
  ['0001', PartSkin.Mystic],
  ['0011', PartSkin.Japan],
  ['0100', PartSkin.Xmas1],
  ['0101', PartSkin.Xmas2],
  ['0010', PartSkin.Bionic],
  ['0110', PartSkin.Summer],
  ['0111', PartSkin.StrawberrySummer],
  ['1000', PartSkin.VanillaSummer],
  ['1001', PartSkin.Shiny],
  ['1010', PartSkin.StrawberryShiny],
  ['1011', PartSkin.VanillaShiny]
]);
