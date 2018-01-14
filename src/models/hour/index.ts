import * as Ensure from "@utils/ensure";

export class Hour {
    constructor(private value: number) {
        Ensure.notNull(value);
        Ensure.range(value, 0, 23);
    }
}