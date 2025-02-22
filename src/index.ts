import { generateJimps } from "./generateJimps";
import { generateSheet } from "./generateSheet";
import { getArgs } from "./getArgs";
import { readFiles } from "./readFiles";

const process = async () => {
    const args = getArgs()
    const files = await readFiles(args)
    const jimpCombos = generateJimps(files)
    const sheet = await generateSheet(jimpCombos)

    sheet.write('out.png')
}

process()