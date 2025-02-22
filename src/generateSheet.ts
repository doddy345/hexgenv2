import Jimp from "jimp";

export const generateSheet = (inputJimps: Jimp[], columns: number = 8) => {
    const singleSpriteWidth = inputJimps[0].bitmap.width
    const singleSpriteHeight = inputJimps[0].bitmap.height
    const outWidth = columns * singleSpriteWidth
    const outHeight = Math.ceil(inputJimps.length * singleSpriteHeight / columns)
    const result = new Jimp(outWidth, outHeight)

    inputJimps.forEach((jimp, i) => {
        const x0 = i % 8
        const y0 = Math.floor(i / 8)

        const x = x0 * singleSpriteWidth
        const y = y0 * singleSpriteHeight
        result.composite(jimp, x, y)
    })

    return result
}
