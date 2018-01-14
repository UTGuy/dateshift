import { Month } from "@models/month";
import { MonthType } from "@models/monthType";

const months31 = [
    MonthType.January,
    MonthType.March,
    MonthType.May,
    MonthType.July,
    MonthType.August,
    MonthType.October,
    MonthType.December
];

export function getNumberOfDaysInMonth(month: Month) {
    const isFeb = month.value == MonthType.February;
    if (isFeb) {
        return month.year.isLeapYear ? 29 : 28;
    }

    const is31 = months31.some(x => x === month.value);
    return is31 ? 31 : 30;
}