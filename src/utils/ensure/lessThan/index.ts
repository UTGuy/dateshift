export function lessThan(value: number, min: number) {
    if (value > min)
        throw `Value must be less than ${min}`;
}