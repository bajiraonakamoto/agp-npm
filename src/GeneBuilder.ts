import { Gene2 } from './Gene2';
import { GeneBin } from './GeneBin';
import { BinClassMap } from './models/cls';
import { GetBody } from './Body';
import { GetColor } from './Color';

export function GeneBuilder(geneBin: GeneBin): Gene2 {
  return {
    cls: BinClassMap[geneBin.cls],
    body: GetBody(geneBin),
    primaryColor: GetColor(geneBin)
  } as Gene2;
}

