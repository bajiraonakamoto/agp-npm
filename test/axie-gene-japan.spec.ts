import {AxieGene} from "../src/axie-gene";
import {Cls} from "../src/models/cls";
import {Region} from "../src/models/region";
import {Tag} from "../src/models/tag";
import {BodySkin} from "../src/Body";
import {PartType} from "../src/models/part";

describe('AxieGene_Japan_512bit', () => {
    const axieGene = new AxieGene('0x280000000000010040412090830C0000000101942040440A00010190284082040001018C2061000A000101801021400400010180204080060001018418404008');
    it('parse class', () => {
        expect(axieGene.cls).toBe(Cls.Reptile);
    });
    it('parse region', () => {
        expect(axieGene.region).toBe(Region.Japan);
    });
    it('parse tag', () => {
        expect(axieGene.tag).toBe(Tag.Default);
    });
    it('parse body skin', () => {
        expect(axieGene.bodySkin).toBe(BodySkin.Normal);
    });
    it('parse pattern', () => {
        expect(axieGene.pattern).toStrictEqual({ d: '100000001', r1: '000001001', r2: '000001001' });
    });
    it('parse color', () => {
        expect(axieGene.color).toStrictEqual({ d: 'fdbcff', r1: 'ef93ff', r2: 'ef93ff' });
    });
    it('parse eyes', () => {
        const want = {
            d: {
                partId: 'eyes-dokuganryu',
                cls: Cls.Reptile,
                specialGenes: 'japan',
                type: PartType.Eyes,
                name: 'Dokuganryu',
            },
            r1: { partId: 'eyes-mavis', cls: Cls.Bird, specialGenes: '', type: PartType.Eyes, name: 'Mavis' },
            r2: { partId: 'eyes-telescope', cls: Cls.Aquatic, specialGenes: '', type: PartType.Eyes, name: 'Telescope' },
            mystic: false,
        };
        expect(axieGene.eyes).toStrictEqual(want);
    });
    it('parse mouth', () => {
        const want = {
            d: { partId: 'mouth-geisha', cls: Cls.Aquatic, specialGenes: 'japan', type: PartType.Mouth, name: 'Geisha' },
            r1: { partId: 'mouth-peace-maker', cls: Cls.Bird, specialGenes: '', type: PartType.Mouth, name: 'Peace Maker' },
            r2: { partId: 'mouth-peace-maker', cls: Cls.Bird, specialGenes: '', type: PartType.Mouth, name: 'Peace Maker' },
            mystic: false,
        };
        expect(axieGene.mouth).toStrictEqual(want);
    });
    it('parse ears', () => {
        const want = {
            d: { partId: 'ears-maiko', cls: Cls.Plant, specialGenes: 'japan', type: PartType.Ears, name: 'Maiko' },
            r1: { partId: 'ears-maiko', cls: Cls.Plant, specialGenes: 'japan', type: PartType.Ears, name: 'Maiko' },
            r2: { partId: 'ears-puppy', cls: Cls.Beast, specialGenes: '', type: PartType.Ears, name: 'Puppy' },
            mystic: false,
        };
        expect(axieGene.ears).toStrictEqual(want);
    });
    it('parse horn', () => {
        const want = {
            d: { partId: 'horn-kendama', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Horn, name: 'Kendama' },
            r1: { partId: 'horn-parasite', cls: Cls.Bug, specialGenes: '', type: PartType.Horn, name: 'Parasite' },
            r2: { partId: 'horn-kendama', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Horn, name: 'Kendama' },
            mystic: false,
        };
        expect(axieGene.horn).toStrictEqual(want);
    });
    it('parse back', () => {
        const want = {
            d: { partId: 'back-hamaya', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Back, name: 'Hamaya' },
            r1: { partId: 'back-origami', cls: Cls.Bird, specialGenes: 'japan', type: PartType.Back, name: 'Origami' },
            r2: { partId: 'back-jaguar', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Jaguar' },
            mystic: false,
        };
        expect(axieGene.back).toStrictEqual(want);
    });
    it('parse tail', () => {
        const want = {
            d: { partId: 'tail-maki', cls: Cls.Bug, specialGenes: 'japan', type: PartType.Tail, name: 'Maki' },
            r1: { partId: 'tail-swallow', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Swallow' },
            r2: { partId: 'tail-hare', cls: Cls.Beast, specialGenes: '', type: PartType.Tail, name: 'Hare' },
            mystic: false,
        };
        expect(axieGene.tail).toStrictEqual(want);
    });
});