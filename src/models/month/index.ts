import * as Ensure from "@utils/ensure";
import { Year } from "@models/year";
import { MonthType } from "@models/monthType";
import { getNumberOfDaysInMonth } from "@ops/getNumberOfDaysInMonth";
import { tryCacheGet } from "@utils/tryCacheGet";

export class Month {
    constructor(public value: MonthType, public year: Year) {
        Ensure.notNull(value, year);
        Ensure.range(value, 0, 11);
    }

    private _numberOfDays: number;
    get numberOfDays(): number {
        return tryCacheGet(this._numberOfDays, () => getNumberOfDaysInMonth(this));
    }
}