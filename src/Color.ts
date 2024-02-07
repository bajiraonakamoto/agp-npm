import { GeneBin, Heritage } from './GeneBin';
import { GetClass } from './Clazz';
import { PrimaryColorMap } from './PrimaryColor';

export interface Color {
  hex: string,
  name: string,
  colorID: string
}

export function GetColor(genBin: GeneBin): Heritage {
  const primaryColorBin = genBin.primaryColor;
  const clazz = GetClass(genBin);
  const primaryColorMap = PrimaryColorMap[clazz];
  return {
    d: primaryColorMap[primaryColorBin.d],
    r1: primaryColorMap[primaryColorBin.r1],
    r2: primaryColorMap[primaryColorBin.r2]
  } as Heritage;
}
