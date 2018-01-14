import * as Ensure from "@utils/ensure";
import { cacheProp } from "@decs/cacheProp";
import { Month } from "@models/month";
import { MonthType } from "@models/monthType";
import { DayOfWeek } from "@models/dayOfWeek";
import { getDayOfWeek } from "@ops/getDayOfWeek";

export class Day {
    constructor(public value: number, public month: Month) {
        Ensure.notNull(value, month);
    }

    @cacheProp<Day, DayOfWeek>(target => getDayOfWeek(target))
    dayOfWeek: DayOfWeek;
}