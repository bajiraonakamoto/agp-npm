/** Collectively stores the binary representation of an Axie gene into their respective groups. */
export interface GeneBinGroup2 {
    cls: string;
    reservation: string;
    contribution: string;
    body: string;
    primaryColor: string;
    secondaryColor: string;
    eyes: string;
    ears: string;
    horn: string;
    mouth: string;
    back: string;
    tail: string;
}

export function ParseGeneBinGroupFromGenHex(genHex: string) {
    // Remove the hex prefix.
    // Convert each hex character to its binary equivalent.
    // Fill the binary values with leading's 0s.
    // hexBin = hexBin.padStart(512, '0');
    const hexBin = genHex
        .replace('0x', '')
        .split('')
        .map((value) => parseInt(value, 16).toString(2).padStart(4, '0'))
        .join('')
        .padStart(512, '0')

    // Divide the binary values into their respective groups.

    const cls = hexBin.slice(0, 5)
    const reservation = hexBin.slice(5, 50)
    const contribution = hexBin.slice(50, 55)
    const body = hexBin.slice(55, 92)
    const primaryColor = hexBin.slice(92, 110)
    const secondaryColor = hexBin.slice(110, 128)
    const eyes = hexBin.slice(128, 192)
    const mouth = hexBin.slice(192, 256)
    const ears = hexBin.slice(256, 320)
    const horn = hexBin.slice(320, 384)
    const back = hexBin.slice(384, 448)
    const tail = hexBin.slice(448, 512)

    const genBinGroup: GeneBinGroup2 = {
        cls,
        reservation,
        contribution,
        body,
        primaryColor,
        secondaryColor,
        eyes,
        mouth,
        ears,
        horn,
        back,
        tail
    };

    return genBinGroup
}
