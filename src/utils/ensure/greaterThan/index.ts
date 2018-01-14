export function greaterThan(value: number, max: number) {
    if (value < max)
        throw `Value must be greater than ${max}`;
}