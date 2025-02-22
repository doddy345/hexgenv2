import { ValidArgs } from "./getArgs";
import Jimp from "jimp";

export type HexFiles = {
    base: Jimp,
    nw?: Jimp,
    n?: Jimp,
    ne?: Jimp,
    s?: Jimp,
    sw?: Jimp,
    se?: Jimp, 
}

export const readFiles = async (args: ValidArgs): Promise<HexFiles> => {
    const { base, n , ne, se, s, sw, nw } = args

    return {
        base: await Jimp.read(base),
        ...( typeof nw === 'string' ? { nw: await Jimp.read(nw) } : {} ),
        ...( typeof n === 'string' ? { n: await Jimp.read(n) } : {} ),
        ...( typeof ne === 'string' ? { ne: await Jimp.read(ne) } : {} ),
        ...( typeof se === 'string' ? { se: await Jimp.read(se) } : {} ),
        ...( typeof s === 'string' ? { s: await Jimp.read(s) } : {} ),
        ...( typeof sw === 'string' ? { sw: await Jimp.read(sw) } : {} )
    }
}