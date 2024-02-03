import { Gene2 } from './Gene2';
import { GeneBin } from './GeneBin';
import { BinClassMap } from './models/cls';
import { GetBody } from './Body';


export function GeneBuilder(geneBin: GeneBin): Gene2 {
  return {
    cls: BinClassMap[geneBin.cls],
    body : GetBody(geneBin.body)
  } as Gene2;
}

