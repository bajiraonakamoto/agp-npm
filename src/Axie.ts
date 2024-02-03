import { GeneBinGroup } from './models/internal/gene-bin-group';
import { Part, PartGene, PartSkin, PartType } from './models/part';
import { ColorGene } from './models/color';
import { binClassMap, Cls } from './models/cls';
import { PatternGene } from './models/pattern';
import { Gene2 } from './Gene2';
import { GeneBin, ParseGeneBinFromGenHex } from './GeneBin';
import { GeneBuilder } from './GeneBuilder';
import traitsJson = require('./assets/traits.json');
import partsJson = require('./assets/parts.json');
import { Body } from './Body';


/**
 * Stores the gene information of an Axie. These informations are parsed from the provided hex representation of
 * the Axie's gene on its constructor call. Supports both 256 and 512 bit hex genes.
 *
 * **Usage**
 *
 * Javascript
 *
 * ```javascript
 * const { AxieGene } = require("agp-npm-test/dist/src/axie-gene");
 * const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
 * ```
 *
 * Typescript
 *
 * ```typescript
 * const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
 * ```
 */
export class Axie {
  /** Stores the grouped binary values from the hex value. */
  private readonly geneBin: GeneBin;
  /** Stores the gene details from the parsed binary values. */
  private readonly _genes: Gene2;

  /**
   * Used to initialize an AxieGene object from a hex representation of the Axie's gene.
   * @param geneHex512 hex representation of the Axie's gene in 512 bit.
   */
  constructor(geneHex512: string) {
    this.geneBin = ParseGeneBinFromGenHex(geneHex512);
    this._genes = GeneBuilder(this.geneBin);
  }

  /**
   * Getter for all of the details of the Axie's gene.
   * @returns Objects that contains all of the details about of the Axie's gene.
   */
  get genes(): Gene2 {
    return this._genes;
  }

  /**
   * Getter for the class of the Axie.
   * @returns Class of the Axie.
   */
  get cls(): Cls {
    return this._genes.cls;
  }

  /**
   * Getter for the body skin of the Axie.
   * @returns Skin of the Axie's body.
   */
  get body(): Body {
    return this._genes.body;
  }

  /**
   * Getter for the pattern genes of the Axie.
   * @returns Genes for the Axie's pattern.
   */
  get pattern(): PatternGene {
    return {} as any;
  }

  /**
   * Getter for the color genes of the Axie.
   * @returns Genes for the Axie's color.
   */
  get color(): ColorGene {
    return {} as any;
  }

  /**
   * Getter for the eye genes of the Axie.
   * @returns Genes for the Axie's eye.
   */
  get eyes(): Part {
    return {} as any;
  }

  /**
   * Getter for the ears genes of the Axie.
   * @returns Genes for the Axie's ears.
   */
  get ears(): Part {
    return {} as any;
  }

  /**
   * Getter for the horn genes of the Axie.
   * @returns Genes for the Axie's horns.
   */
  get horn(): Part {
    return {} as any;
  }

  /**
   * Getter for the mouth genes of the Axie.
   * @returns Genes for the Axie's mouth.
   */
  get mouth(): Part {
    return {} as any;
  }

  /**
   * Getter for the back genes of the Axie.
   * @returns Genes for the Axie's back.
   */
  get back(): Part {
    return {} as any;
  }

  /**
   * Getter for the tail genes of the Axie.
   * @returns Genes for the Axie's tail.
   */
  get tail(): Part {
    return {} as any;
  }

  /**
   * Converts the hex into its binary representation and divides them based on their respective respective groups.
   * Each group represents a part of an Axie.
   * @private
   * @param hex hex representation of an Axie's gene.
   * @returns An object that contains the binary value from the hex. The binary values are divided into their respective
   * group based on the gene detail that they represent.
   */
  private parseHex(hex: string): GeneBinGroup {
    let hexBin = '';
    // Remove the hex prefix.
    hex = hex.replace('0x', '');
    // Convert each hex character to its binary equivalent.
    Array.from(hex).forEach((c) => {
      hexBin += parseInt(c, 16).toString(2).padStart(4, '0');
    });
    // Fill the binary values with leadings 0s.
    hexBin = hexBin.padStart(512, '0');
    // Divide the binary values into their respective groups.
    return {
      cls: hexBin.slice(0, 5),
      region: hexBin.slice(22, 40),
      tag: hexBin.slice(40, 55),
      bodySkin: hexBin.slice(61, 65),
      xMas: hexBin.slice(22, 34),
      pattern: hexBin.slice(65, 92),
      color: hexBin.slice(92, 110),
      eyes: hexBin.slice(149, 192),
      mouth: hexBin.slice(213, 256),
      ears: hexBin.slice(277, 320),
      horn: hexBin.slice(341, 384),
      back: hexBin.slice(405, 448),
      tail: hexBin.slice(469, 512)
    };
  }

  /**
   * Converts the binary values into a human-readable format in the form of a Gene object.
   * @private
   * @returns Gene Gene object that contains the set of gene information.
   */
  // private parseGenes(): Gene {
  //   return {
  //     cls: this.parseClass(),
  //     region: this.parseRegion(),
  //     tag: this.parseTag(),
  //     bodySkin: this.parseBodySkin(),
  //     pattern: this.parsePatternGenes(),
  //     color: this.parseColorGenes(),
  //     eyes: this.parsePart(this.geneBinGroup.eyes, PartType.Eyes),
  //     ears: this.parsePart(this.geneBinGroup.ears, PartType.Ears),
  //     horn: this.parsePart(this.geneBinGroup.horn, PartType.Horn),
  //     mouth: this.parsePart(this.geneBinGroup.mouth, PartType.Mouth),
  //     back: this.parsePart(this.geneBinGroup.back, PartType.Back),
  //     tail: this.parsePart(this.geneBinGroup.tail, PartType.Tail)
  //   };
  // }

  /**
   * Parse the class binary values from the GenBinGroup into a Cls object.
   * @private
   * @returns Cls class of the Axie.
   */
  // private parseClass(): Cls {
  //   const ret = binClassMap.get(this.geneBinGroup.cls);
  //   if (ret === undefined) {
  //     throw new Error('cannot recognize class');
  //   }
  //   return ret;
  // }

  /**
   * Parse the region binary values from the GenBinGroup into a Region object.
   * @private
   * @returns Region region of the Axie.
   */
  // private parseRegion(): Region {
  //   const ret = binRegionMap.get(this.geneBinGroup.region);
  //   if (ret === undefined) {
  //     if (this.geneBinGroup.eyes.slice(0, 4) === '0011') return Region.Japan;
  //     if (this.geneBinGroup.mouth.slice(0, 4) === '0011') return Region.Japan;
  //     if (this.geneBinGroup.ears.slice(0, 4) === '0011') return Region.Japan;
  //     if (this.geneBinGroup.horn.slice(0, 4) === '0011') return Region.Japan;
  //     if (this.geneBinGroup.back.slice(0, 4) === '0011') return Region.Japan;
  //     if (this.geneBinGroup.tail.slice(0, 4) === '0011') return Region.Japan;
  //     if (this.geneBinGroup.region === '000000000000000000') return Region.Global;
  //   } else {
  //     return ret;
  //   }
  //   return Region.Unknown;
  // }

  /**
   * Parse the tag binary values from the GenBinGroup into a Tag object.
   * @private
   * @returns Tag tag of the Axie.
   */
  // private parseTag(): Tag {
  //   if (this.geneBinGroup.tag === '000000000000000') {
  //     const bionicParts: PartSkin[] = [
  //       this.parsePartSkin(
  //         this.geneBinGroup.region,
  //         this.geneBinGroup.eyes.slice(0, 4)
  //       ),
  //       this.parsePartSkin(
  //         this.geneBinGroup.region,
  //         this.geneBinGroup.ears.slice(0, 4)
  //       ),
  //       this.parsePartSkin(
  //         this.geneBinGroup.region,
  //         this.geneBinGroup.horn.slice(0, 4)
  //       ),
  //       this.parsePartSkin(
  //         this.geneBinGroup.region,
  //         this.geneBinGroup.mouth.slice(0, 4)
  //       ),
  //       this.parsePartSkin(
  //         this.geneBinGroup.region,
  //         this.geneBinGroup.back.slice(0, 4)
  //       ),
  //       this.parsePartSkin(
  //         this.geneBinGroup.region,
  //         this.geneBinGroup.tail.slice(0, 4)
  //       )
  //     ];
  //     return bionicParts.includes(PartSkin.Bionic)
  //       ? Tag.Agamogenesis
  //       : Tag.Default;
  //   }
  //   const ret = binTagMap.get(this.geneBinGroup.tag);
  //   if (ret === undefined) {
  //     throw new Error('cannot recognize tag');
  //   }
  //   return ret;
  // }

  /**
   * Parse the body skin binary values from the GenBinGroup into a BodySkin object.
   * @private
   * @returns BodySkin body skin of the Axie.
   */
  // private parseBodySkin(): BodySkin {
  //   const ret = binBodySkin.get(this.geneBinGroup.bodySkin);
  //   if (ret === undefined) throw new Error('cannot recognize body skin');
  //   return ret;
  // }

  /**
   * Parse the pattern gene binary values from the GenBinGroup into a PatternGene object.
   * @private
   * @returns PatternGene pattern gene of the Axie.
   */
  // private parsePatternGenes(): PatternGene {
  //   const bSize = this.geneBinGroup.pattern.length / 3;
  //   return {
  //     d: this.geneBinGroup.pattern.slice(0, bSize),
  //     r1: this.geneBinGroup.pattern.slice(bSize, bSize * 2),
  //     r2: this.geneBinGroup.pattern.slice(bSize * 2, bSize * 3)
  //   };
  // }

  /**
   * Parse the color gene binary values from the GenBinGroup into a ColorGene object.
   * @private
   * @returns ColorGene color gene of the Axie.
   */
  // private parseColorGenes(): ColorGene {
  //   const bSize = this.geneBinGroup.color.length / 3;
  //   const cls = this.parseClass();
  //   const d =
  //     classColorMap
  //       .get(cls)
  //       ?.get(this.geneBinGroup.color.slice(0, bSize).slice(-4)) ||
  //     this.geneBinGroup.color.slice(0, bSize);
  //   const r1 =
  //     classColorMap
  //       .get(cls)
  //       ?.get(this.geneBinGroup.color.slice(bSize, bSize * 2).slice(-4)) ||
  //     this.geneBinGroup.color.slice(bSize, bSize * 2);
  //   const r2 =
  //     classColorMap
  //       .get(cls)
  //       ?.get(this.geneBinGroup.color.slice(bSize * 2, bSize * 3).slice(-4)) ||
  //     this.geneBinGroup.color.slice(bSize * 2, bSize * 3);
  //   return { d, r1, r2 };
  // }

  /**
   * Parse the part gene binary values from the GenBinGroup into a Part object.
   * @private
   * @param partBin binary of the part that will be parsed.
   * @param partType part type that will be parsed. A part type refers to an Axie's body part including: Eyes, Ears, Mouth, Back, Horn, Tail
   * @returns Part part gene of the Axie.
   */
  // private parsePart(partBin: string, partType: PartType): Part {
  //   // Get the region and skin values needed to parse the correct part gene
  //   const regionBin = this.geneBinGroup.region;
  //
  //   const dSkinBin = partBin.slice(0, 4);
  //   const rSkinBin = dSkinBin;
  //
  //   const dSkin = this.parsePartSkin(regionBin, dSkinBin);
  //   const rSkin = this.parsePartSkin(regionBin, rSkinBin);
  //
  //   // Get the dominant gene
  //   const dClass = this.parsePartClass(partBin.slice(4, 9));
  //   const dBin = partBin.slice(11, 17);
  //   const dName = this.parsePartName(dClass, partType, regionBin, dBin, dSkin);
  //   const d = this.parsePartGene(partType, dName);
  //
  //   // Get the recessive 1 gene
  //   const r1Class = this.parsePartClass(partBin.slice(17, 22)
  //   );
  //   const r1Bin = partBin.slice(24, 30);
  //   const r1Name = this.parsePartName(
  //     r1Class,
  //     partType,
  //     regionBin,
  //     r1Bin,
  //     rSkin
  //   );
  //   const r1 = this.parsePartGene(partType, r1Name);
  //
  //   // Get the recessive 2 gene
  //   const r2Class = this.parsePartClass(partBin.slice(30, 35));
  //   const r2Bin = partBin.slice(37, 43);
  //   const r2Name = this.parsePartName(
  //     r2Class,
  //     partType,
  //     regionBin,
  //     r2Bin,
  //     rSkin
  //   );
  //   const r2 = this.parsePartGene(partType, r2Name);
  //
  //   const mystic = dSkin === PartSkin.Mystic || dSkinBin === '0001';
  //
  //   return { d, r1, r2, mystic };
  // }

  /**
   * Parse the class of the given part into a Cls object.
   * @private
   * @param bin binary representation of an Axie's body part.
   * @returns Cls class of the Axie's body part.
   */
  private parsePartClass(bin: string): Cls {
    const ret = binClassMap.get(bin);
    if (ret === undefined) {
      throw new Error('cannot recognize part class');
    }
    return ret;
  }

  /**
   * Parse the name of an Axie's body part based on its class, part type, region, part binary, and skin binary.
   * @private
   * @param cls class of the Axie's body part.
   * @param partType part type that will be parsed.
   * @param regionBin region binary of the Axie.
   * @param partBin part binary of the Axie.
   * @param skin skin type of the Axie's part.
   * @returns Cls class of the Axie.
   */
  private parsePartName(
    cls: Cls,
    partType: PartType,
    regionBin: string,
    partBin: string,
    skin: PartSkin
  ): string {
    // @ts-ignore
    const part = traitsJson[cls][partType][partBin];
    if (part === undefined) throw new Error('cannot recognize part binary');
    let ret = part[skin];
    if (ret === undefined) {
      const fallBack = part[PartSkin.Global];
      if (fallBack === undefined) throw new Error('cannot recognize part skin');
      ret = fallBack;
    }
    return ret;
  }

  /**
   * Converts the part type and name into a format used as the partId. A lookup is then performed from the contents
   * of the parts.json file to match the partId with the part gene presets.
   * @private
   * @param partType body part that will be parsed.
   * @param partName name of the specific body part.
   * @returns PartGene an objects that contains the part class, id, name, type, and if it is a special gene.
   */
  private parsePartGene(partType: PartType, partName: string): PartGene {
    const partId = `${partType}-${partName.toLowerCase()}`
      .split(' ')
      .join('-')
      .replace('\'', '')
      .replace('.', '');
    // @ts-ignore
    const partJson = partsJson[partId];
    if (partJson === undefined) {
      throw new Error('cannot recognize part gene');
    } else
      return {
        cls: partJson.class,
        name: partJson.name,
        partId,
        specialGenes: partJson.specialGenes,
        type: partJson.type
      };
  }

  /**
   * Parses the skin of the part based on its region and skin binary value.
   * @private
   * @param regionBin region binary of the Axie.
   * @param skinBin skin binary of the Axie.
   * @returns PartSkin skin of the Axie's body part.
   */
  // private parsePartSkin(regionBin: string, skinBin: string): PartSkin {
  //   let ret = binPartSkinMap.get(skinBin);
  //   if (skinBin === '00') {
  //     if (this.geneBinGroup.xMas === '010101010101') ret = PartSkin.Xmas1;
  //     else ret = binPartSkinMap.get(regionBin);
  //   }
  //   if (ret === undefined) {
  //     throw new Error('cannot recognize part skin');
  //   }
  //   return ret;
  // }

  /**
   * Calculates the purity or gene quality of the Axie's gene.
   * @returns a number that represents the quality of the gene in percentage.
   */
  getGeneQuality(): number {
    // let geneQuality = 0;
    // geneQuality += this.getPartQuality(this._genes.eyes);
    // geneQuality += this.getPartQuality(this._genes.ears);
    // geneQuality += this.getPartQuality(this._genes.mouth);
    // geneQuality += this.getPartQuality(this._genes.horn);
    // geneQuality += this.getPartQuality(this._genes.back);
    // geneQuality += this.getPartQuality(this._genes.tail);
    // return parseFloat(geneQuality.toFixed(2));
    return 0;
  }

  /**
   * Calculate the purity or gene quality of the Axie's individual parts.
   * @param part part genes the will be used for the calculation.
   * @private
   * @returns an integer that represents the quality of the individual part in percentage.
   */
  private getPartQuality(part: Part): number {
    const cls = this._genes.cls;
    let partQuality = 0;
    partQuality += part.d.cls === cls ? 76 / 6 : 0;
    partQuality += part.r1.cls === cls ? 3 : 0;
    partQuality += part.r2.cls === cls ? 1 : 0;
    return partQuality;
  }
}
