/** Represents the special skin of an Axie's body. This can either be none (default), Frosty or Wavy. */
export enum BodySkin {
  Normal = '',
  Frosty = 'frosty',
  Wavy = 'wavy',
}

export const binBodySkin = new Map([
  ['0000', BodySkin.Normal],
  ['0001', BodySkin.Frosty],
  ['0010', BodySkin.Wavy],
]);
