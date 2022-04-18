const args: string[] = process.argv;

interface parsedArgs {
    node: string,
    command: string,
    flags: {
        [key: string]: boolean
    },
    arguments: string[]
};

export const parsedArgs: parsedArgs = {
    node: args[0],
    command: args[1],
    flags:  Object.assign({}, ...args.slice(2).filter(v => v.startsWith("-")).map(v => ({ [v.substring(1)]: true }))),
    arguments: args.slice(2).filter(v => !v.startsWith("-"))
};