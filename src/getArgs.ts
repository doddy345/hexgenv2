import commandLineArgs from 'command-line-args'

export type ValidArgs = ReturnType<typeof getArgs>

export const getArgs = () => {
    const optionDefinitions = [
        { name: 'base', alias: 'b', type: String },
        { name: 'nw', type: String },
        { name: 'n', type: String },
        { name: 'ne', type: String },
        { name: 'se', type: String },
        { name: 's', type: String },
        { name: 'sw', type: String },
    ]

    const options = commandLineArgs(optionDefinitions)

    const {base, nw, n, ne, se, s, sw} = options

    if (typeof base !== 'string') {
        throw Error('Missing required argument: base')
    }

    return {
        base,
        ...( typeof nw === 'string' ? { nw } : {} ),
        ...( typeof n === 'string' ? { n } : {} ),
        ...( typeof ne === 'string' ? { ne } : {} ),
        ...( typeof se === 'string' ? { se } : {} ),
        ...( typeof s === 'string' ? { s } : {} ),
        ...( typeof sw === 'string' ? { sw } : {} )
    }
}
