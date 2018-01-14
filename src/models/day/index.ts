import * as Ensure from "@utils/ensure";
import { tryCacheGet } from "@utils/tryCacheGet";
import { Month, MonthType } from "@models/month";
import { DayOfWeek } from "@models/dayOfWeek";
import { getDayOfWeek } from "@ops/getDayOfWeek";

export class Day {
    constructor(public value: number, public month: Month) {
        Ensure.notNull(value, month);
    }

    private _dayOfWeek: DayOfWeek;
    get dayOfWeek(): DayOfWeek {
        return tryCacheGet(this._dayOfWeek, () => getDayOfWeek(this));
    }
}