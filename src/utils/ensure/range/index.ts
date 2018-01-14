export function range(value: number, min: number, max: number) {
    if (value < min || value > max)
        throw `Value must be in range [${min}-${max}]`;
}