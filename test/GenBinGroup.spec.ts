import {AxieGene} from "../src/axie-gene";
import {Cls} from "../src/models/cls";
import {ParseGeneBinGroupFromGenHex} from "../src/GeneBinGroup2";

describe('AxieGene_Japan_512bit', () => {
    // https://app.axieinfinity.com/marketplace/axies/11953846/
    const genBinGroup = ParseGeneBinGroupFromGenHex('0x1800000000000500018100c1021000000001001428014008000100002861400a000100002861410a0001000c20814108000100042861450a0001000028418008');
    it('parse class', () => {
        expect(genBinGroup.cls).toBe(Cls.Reptile);
    });
})