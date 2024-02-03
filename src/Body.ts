/** Represents the special skin of an Axie's body. This can either be none (default), Frosty or Wavy. */
import { BodyGeneBin, Heritage } from './GeneBin';

export interface Body {
  heritability: string;
  skin: string;
  shape: Heritage;
  primaryColor: Heritage;
}

export function GetBody(bodyBin: BodyGeneBin) : Body{
  return {
    shape: {
      d: GetBodyShape(bodyBin.shape.d),
      r1: GetBodyShape(bodyBin.shape.r1),
      r2: GetBodyShape(bodyBin.shape.r2)
    }
  } as Body;
}

export enum Shape {
  UNKNOWN = 'unknown',
}

const BodyShape: { [key: string]: Shape } = {};

export function GetBodyShape(shapeBin: string) {
  if (BodyShape[shapeBin]) return BodyShape[shapeBin];
  return Shape.UNKNOWN;
}
