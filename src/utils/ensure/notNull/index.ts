export function notNull(...values: any[]) {
    for (let i = 0; i < values.length; i++)
        if (values[i] == null)
            throw `Value can not be null`;
}