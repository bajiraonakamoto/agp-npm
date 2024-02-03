import { Gene2 } from './Gene2';
import { GeneBin } from './GeneBin';
import { BinClassMap } from './models/cls';


export function GeneBuilder(geneBin: GeneBin): Gene2 {
  return {
    cls: BinClassMap[geneBin.cls]
  } as Gene2;
}

