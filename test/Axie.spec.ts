import { Axie } from '../src/Axie';
import { Cls } from '../build/models/cls';
import { Shape } from '../src/Body';

describe('Axie instance', () => {
  // https://app.axieinfinity.com/marketplace/axies/11610035/
  const geneHex512 = `0x1000080402104100000000100002801400a0001001408014504000100001800c0060001000008a042060001000c1041820c0001000820408208`;

  it('Class is beast from gene', () => {
    const axie = new Axie(geneHex512);
    expect(axie.cls).toBe(Cls.Beast);
  });

  it('Body is unknown from gene', () => {
    const axie = new Axie(geneHex512);
    expect(axie.body.shape.d).toBe(Shape.UNKNOWN);
    expect(axie.body.shape.r1).toBe(Shape.UNKNOWN);
    expect(axie.body.shape.r2).toBe(Shape.UNKNOWN);
  });

});