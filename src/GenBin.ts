/** Collectively stores the binary representation of an Axie gene into their respective groups. */
export interface BaseGeneBin {
  cls: string;
  reservation: string;
  contribution: string;
  body: string;
  primaryColor: string;
  secondaryColor: string;
  eyes: string;
  ears: string;
  horn: string;
  mouth: string;
  back: string;
  tail: string;
}

export interface GeneBin {
  cls: string;
  reservation: string;
  contribution: string;
  body: BodyGeneBin;
  primaryColor: Heritage;
  secondaryColor: Heritage;
  eyes: string;
  ears: string;
  horn: string;
  mouth: string;
  back: string;
  tail: string;
}

export interface BodyGeneBin {
  heritability: string;
  skin: string;
  bodyShape: Heritage;
  primaryColor: Heritage;
}

export interface Heritage {
  d: string,
  r1: string,
  r2: string
}

export function ParseGeneBinFromGenHex(genHex: string): GeneBin {
  const baseBinGeneBin = ParseBaseGeneBin(genHex);
  const body = ParseBodyGeneBin(baseBinGeneBin.body);
  const primaryColor = ParseColorGeneBin(baseBinGeneBin.primaryColor);
  const secondaryColor = ParseColorGeneBin(baseBinGeneBin.secondaryColor);
  return {
    cls: baseBinGeneBin.cls,
    reservation: baseBinGeneBin.reservation,
    contribution: baseBinGeneBin.contribution,
    body,
    primaryColor,
    secondaryColor
  } as GeneBin;
}

function ParseBodyGeneBin(bodyBaseBin: string): BodyGeneBin {
  return {
    heritability: bodyBaseBin.slice(0, 1),
    skin: bodyBaseBin.slice(1, 10),
    bodyShape: {
      d: bodyBaseBin.slice(10, 19),
      r1: bodyBaseBin.slice(19, 28),
      r2: bodyBaseBin.slice(28, 37)
    }
  } as BodyGeneBin;
}

function ParseColorGeneBin(primaryColorBaseBin: string): Heritage {
  return {
    d: primaryColorBaseBin.slice(0, 6),
    r1: primaryColorBaseBin.slice(6, 12),
    r2: primaryColorBaseBin.slice(12, 18)
  } as Heritage;
}


function ParseBaseGeneBin(genHex: string): BaseGeneBin {

  // Remove the hex prefix.
  // Convert each hex character to its binary equivalent.
  // Fill the binary values with leading's 0s.
  // hexBin = hexBin.padStart(512, '0');
  const hexBin = genHex
    .replace('0x', '')
    .split('')
    .map((value) => parseInt(value, 16).toString(2).padStart(4, '0'))
    .join('')
    .padStart(512, '0');

  // Divide the binary values into their respective groups.

  const cls = hexBin.slice(0, 5);
  const reservation = hexBin.slice(5, 50);
  // Normal axie 00000
  // Japan axie  00000
  // Summer axie 00000
  // Shiny axie  00000
  // Xmas2019    00000
  // Xmas2018    00000
  // Agamogenesis axie 00000

  // Mystic axie 00001
  // Origin axie 00001
  // MEO I axie  00010
  // MEO II axie 00011

  const contribution = hexBin.slice(50, 55);
  const body = hexBin.slice(55, 92);
  const primaryColor = hexBin.slice(92, 110);
  const secondaryColor = hexBin.slice(110, 128);
  const eyes = hexBin.slice(128, 192);
  const mouth = hexBin.slice(192, 256);
  const ears = hexBin.slice(256, 320);
  const horn = hexBin.slice(320, 384);
  const back = hexBin.slice(384, 448);
  const tail = hexBin.slice(448, 512);

  return {
    cls,
    reservation,
    contribution,
    body,
    primaryColor,
    secondaryColor,
    eyes,
    mouth,
    ears,
    horn,
    back,
    tail
  } as BaseGeneBin;

}