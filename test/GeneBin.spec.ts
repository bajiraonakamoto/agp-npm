import { ParseGeneBinFromGenHex } from '../src/GeneBin';

describe('Gene binary', () => {
  // https://app.axieinfinity.com/marketplace/axies/11610035/
  const gene = `0x1000080402104100000000100002801400a0001001408014504000100001800c0060001000008a042060001000c1041820c0001000820408208`;

  it('Parse body bin struct from gene bin', () => {
    // bodyBin '1 000000000 000000010 000000010 000000010';
    const geneBin = ParseGeneBinFromGenHex(gene);
    expect(geneBin.body.heritability).toBe('1');
    expect(geneBin.body.skin).toBe('000000000');
    expect(geneBin.body.bodyShape.d).toBe('000000010');
    expect(geneBin.body.bodyShape.r1).toBe('000000010');
    expect(geneBin.body.bodyShape.r2).toBe('000000010');
  });

  it('Parse primary color bin struct from gene bin', () => {
    // primary color bin '000100 000100 000100';
    const geneBin = ParseGeneBinFromGenHex(gene);
    expect(geneBin.primaryColor.d).toBe('000100');
    expect(geneBin.primaryColor.r1).toBe('000100');
    expect(geneBin.primaryColor.r2).toBe('000100');
  });

  it('Parse secondary color bin struct from gene bin', () => {
    // secondary color bin '000000 000000 000000';
    const geneBin = ParseGeneBinFromGenHex(gene);
    expect(geneBin.secondaryColor.d).toBe('000000');
    expect(geneBin.secondaryColor.r1).toBe('000000');
    expect(geneBin.secondaryColor.r2).toBe('000000');
  });

  it('Parse mouth part bin struct from gene bin', () => {
    // 000000000000 000 1 000000000 00101 00000010 00000 00001010 00101 00000100
    const geneBin = ParseGeneBinFromGenHex(gene);
    const mouthBin = geneBin.mouth;
    expect(mouthBin.reservation).toBe('000000000000');
    expect(mouthBin.stage).toBe('000');
    expect(mouthBin.heritability).toBe('1');
    expect(mouthBin.skin).toBe('000000000');
    expect(mouthBin.heritage.d.cls).toBe('00101');
    expect(mouthBin.heritage.d.part).toBe('00000010');
    expect(mouthBin.heritage.r1.cls).toBe('00000');
    expect(mouthBin.heritage.r1.part).toBe('00001010');
    expect(mouthBin.heritage.r2.cls).toBe('00101');
    expect(mouthBin.heritage.r2.part).toBe('00000100');

  });
  it('Parse eyes part bin struct from gene bin', () => {
    // 000000000000 000 1 000000000 00000 00001010 00000 00001010 00000 00001010
    const geneBin = ParseGeneBinFromGenHex(gene);
    const eyesBin = geneBin.eyes;
    expect(eyesBin.reservation).toBe('000000000000');
    expect(eyesBin.stage).toBe('000');
    expect(eyesBin.heritability).toBe('1');
    expect(eyesBin.skin).toBe('000000000');
    expect(eyesBin.heritage.d.cls).toBe('00000');
    expect(eyesBin.heritage.d.part).toBe('00001010');
    expect(eyesBin.heritage.r1.cls).toBe('00000');
    expect(eyesBin.heritage.r1.part).toBe('00001010');
    expect(eyesBin.heritage.r2.cls).toBe('00000');
    expect(eyesBin.heritage.r2.part).toBe('00001010');

  });
  it('Parse ears part bin struct from gene bin', () => {
    // 000000000000 000 1 000000000 00000 00000110 00000 00000110 00000 00000110
    const geneBin = ParseGeneBinFromGenHex(gene);
    const earsBin = geneBin.ears;
    expect(earsBin.reservation).toBe('000000000000');
    expect(earsBin.stage).toBe('000');
    expect(earsBin.heritability).toBe('1');
    expect(earsBin.skin).toBe('000000000');
    expect(earsBin.heritage.d.cls).toBe('00000');
    expect(earsBin.heritage.d.part).toBe('00000110');
    expect(earsBin.heritage.r1.cls).toBe('00000');
    expect(earsBin.heritage.r1.part).toBe('00000110');
    expect(earsBin.heritage.r2.cls).toBe('00000');
    expect(earsBin.heritage.r2.part).toBe('00000110');

  });
  it('Parse tail part bin struct from gene bin', () => {
    // 000000000000 000 1 000000000 00010 00001000 00010 00000100 00010 00001000
    const geneBin = ParseGeneBinFromGenHex(gene);
    const tailBin = geneBin.tail;
    expect(tailBin.reservation).toBe('000000000000');
    expect(tailBin.stage).toBe('000');
    expect(tailBin.heritability).toBe('1');
    expect(tailBin.skin).toBe('000000000');
    expect(tailBin.heritage.d.cls).toBe('00010');
    expect(tailBin.heritage.d.part).toBe('00001000');
    expect(tailBin.heritage.r1.cls).toBe('00010');
    expect(tailBin.heritage.r1.part).toBe('00000100');
    expect(tailBin.heritage.r2.cls).toBe('00010');
    expect(tailBin.heritage.r2.part).toBe('00001000');

  });
  it('Parse horn part bin struct from gene bin', () => {
    // 000000000000 000 1 000000000 00000 00000010 00101 00000010 00010 00000110
    const geneBin = ParseGeneBinFromGenHex(gene);
    const hornBin = geneBin.horn;
    expect(hornBin.reservation).toBe('000000000000');
    expect(hornBin.stage).toBe('000');
    expect(hornBin.heritability).toBe('1');
    expect(hornBin.skin).toBe('000000000');
    expect(hornBin.heritage.d.cls).toBe('00000');
    expect(hornBin.heritage.d.part).toBe('00000010');
    expect(hornBin.heritage.r1.cls).toBe('00101');
    expect(hornBin.heritage.r1.part).toBe('00000010');
    expect(hornBin.heritage.r2.cls).toBe('00010');
    expect(hornBin.heritage.r2.part).toBe('00000110');

  });
});