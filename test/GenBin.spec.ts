import { ParseGeneBinGroupFromGenHex } from '../src/GenBin';

describe('AxieGene_Japan_512bit', () => {
  // https://app.axieinfinity.com/marketplace/axies/11953846/

  it('Parse body bin struct from gene bin', () => {
    // bodyBin '1 000000000 000000111 000001001 000001011';
    const geneBin = ParseGeneBinGroupFromGenHex('0x200000000000050001c120b0c4040000000100082801440800010010286100080001000428214308000100142001830a000100082881400c0001001020618508');
    expect(geneBin.body.heritability).toBe('1');
    expect(geneBin.body.skin).toBe('000000000');
    expect(geneBin.body.bodyShape.d).toBe('000000111');
    expect(geneBin.body.bodyShape.r1).toBe('000001001');
    expect(geneBin.body.bodyShape.r2).toBe('000001011');
  });

  it('parse class', () => {
    // expect(genBinGroup.cls).toBe(Cls.Reptile);
  });
});