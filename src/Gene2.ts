import { Cls } from './models/cls';
import { Body } from './Body';
import { Color } from './PrimaryColor';

/** Contains the overall data about the Axie's gene. */
export interface Gene2 {
  cls: Cls;
  body: Body;
  primaryColor: Color;
}
