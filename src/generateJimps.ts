import Jimp from "jimp";
import { HexFiles } from "./readFiles";

type JimpOrUnefined = Jimp | undefined
type OrderedJimps = [JimpOrUnefined, JimpOrUnefined, JimpOrUnefined, JimpOrUnefined, JimpOrUnefined, JimpOrUnefined]

const generateForIndex = (i: number, base: Jimp, jimps: OrderedJimps) => {
    const newBase = base.clone()

    jimps.forEach((jimp, jimpIndex) => {
        const pow = Math.pow(2, jimpIndex)
        if ((i & pow) === pow && jimp !== undefined) {
            // Add this side
            newBase.composite(jimp, 0, 0)
        }
    })

    return newBase
}

export const generateJimps = (inJimps: HexFiles) => {
    const { base, nw, n, ne, se, s, sw} = inJimps
    const orderedJimps: OrderedJimps = [nw, n, ne, se, s, sw]
    const results: Jimp[] = []

    for (let i = 0; i < 64; i ++) {
        const newCombo = generateForIndex(i, base, orderedJimps)
        results.push(newCombo)
    }

    return results
}