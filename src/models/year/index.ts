import * as Ensure from "@utils/ensure";
import { isLeapYear } from "@ops/isLeapYear";

export class Year {
    constructor(public value: number) {
        Ensure.notNull(value);
        Ensure.greaterThan(value, 1904);
    }

    private _isLeapYear: boolean;
    get isLeapYear(): boolean {
        if (this._isLeapYear == null)
            this._isLeapYear = isLeapYear(this);
        return this._isLeapYear;
    }
}