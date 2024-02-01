import {AxieGene} from "../src/axie-gene";
import {Cls} from "../src/models/cls";
import {ParseGeneBinGroupFromGenHex} from "../src/GeneBinGroup2";

describe('AxieGene_Japan_512bit', () => {
    // https://app.axieinfinity.com/marketplace/axies/11953846/
    const genBinGroup = ParseGeneBinGroupFromGenHex('0x200000000000050001c120b0c4040000000100082801440800010010286100080001000428214308000100142001830a000100082881400c0001001020618508');
    it('parse class', () => {
        expect(genBinGroup.cls).toBe(Cls.Reptile);
    });
})