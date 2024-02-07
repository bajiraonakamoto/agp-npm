/** Stores the dominant and recessive genes of an Axie's color. */
import { Color } from './Color';


const BeastColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#ffec51' } as Color,
  '0011': { hex: '#ffa12a' } as Color,
  '0100': { hex: '#f0c66e' } as Color,
  '0110': { hex: '#60afce' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const BugColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#ff7183' } as Color,
  '0011': { hex: '#ff6d61' } as Color,
  '0100': { hex: '#f74e4e' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const BirdColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#ff9ab8' } as Color,
  '0011': { hex: '#ffb4bb' } as Color,
  '0100': { hex: '#ff778e' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const PlantColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#ccef5e' } as Color,
  '0011': { hex: '#efd636' } as Color,
  '0100': { hex: '#c5ffd9' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const AquaticColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#4cffdf' } as Color,
  '0011': { hex: '#2de8f2' } as Color,
  '0100': { hex: '#759edb' } as Color,
  '0110': { hex: '#ff5a71' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const ReptileColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#fdbcff' } as Color,
  '0011': { hex: '#ef93ff' } as Color,
  '0100': { hex: '#f5e1ff' } as Color,
  '0110': { hex: '#43e27d' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const MechColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#D9D9D9' } as Color,
  '0011': { hex: '#D9D9D9' } as Color,
  '0100': { hex: '#D9D9D9' } as Color,
  '0110': { hex: '#D9D9D9' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const DuskColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#D9D9D9' } as Color,
  '0011': { hex: '#D9D9D9' } as Color,
  '0100': { hex: '#D9D9D9' } as Color,
  '0110': { hex: '#D9D9D9' } as Color,
  '0000': { hex: '#ffffff' } as Color
};

const DawnColonBinMap: { [key: string]: Color } = {
  '0010': { hex: '#D9D9D9' } as Color,
  '0011': { hex: '#D9D9D9' } as Color,
  '0100': { hex: '#D9D9D9' } as Color,
  '0110': { hex: '#D9D9D9' } as Color,
  '0000': { hex: '#ffffff' } as Color
};
export const PrimaryColorMap: { [key: string]: { [key: string]: Color } } = {
  'beast': BeastColonBinMap,
  'bug': BugColonBinMap,
  'bird': BirdColonBinMap,
  'plant': PlantColonBinMap,
  'aquatic': AquaticColonBinMap,
  'reptile': ReptileColonBinMap,
  'mech': MechColonBinMap,
  'dusk': DuskColonBinMap,
  'dawn': DawnColonBinMap
};