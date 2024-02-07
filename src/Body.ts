/** Represents the special skin of an Axie's body. This can either be none (default), Frosty or Wavy. */
import { GeneBin, Heritage } from './GeneBin';

export interface Body {
  heritability: string;
  skin: string;
  shape: Heritage;
  primaryColor: Heritage;
}

export function GetBody(genBin: GeneBin): Body {
  return {
    shape: {
      d: GetBodyShape(genBin.body.shape.d),
      r1: GetBodyShape(genBin.body.shape.r1),
      r2: GetBodyShape(genBin.body.shape.r2)
    }
  } as Body;
}

export enum Shape {
  UNKNOWN = 'unknown',
}

const BinBodyShapeMap: { [key: string]: Shape } = {};

export function GetBodyShape(shapeBin: string) {
  if (BinBodyShapeMap[shapeBin]) return BinBodyShapeMap[shapeBin];
  return Shape.UNKNOWN;
}
