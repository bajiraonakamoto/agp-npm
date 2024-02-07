import { GeneBin } from './GeneBin';

/**
 * Represents the class of a given Axie. A class is among these values:
 * Beast, Bug, Bird, Plant, Aquatic, Reptile, Mech, Dusk, Dawn.
 */
export enum Clazz {
  Beast = 'beast',
  Bug = 'bug',
  Bird = 'bird',
  Plant = 'plant',
  Aquatic = 'aquatic',
  Reptile = 'reptile',
  Mech = 'mech',
  Dusk = 'dusk',
  Dawn = 'dawn',
  UNKNOWN = 'unknown'
}

export const BinClassMap: { [key: string]: Clazz } = {
  '00000': Clazz.Beast,
  '00001': Clazz.Bug,
  '00010': Clazz.Bird,
  '00011': Clazz.Plant,
  '00100': Clazz.Aquatic,
  '00101': Clazz.Reptile,
  '10000': Clazz.Mech,
  '10001': Clazz.Dawn,
  '10010': Clazz.Dusk
};


export function GetClass(geneBin: GeneBin) {
  if (BinClassMap[geneBin.cls]) return BinClassMap[geneBin.cls];
  return Clazz.UNKNOWN;
}