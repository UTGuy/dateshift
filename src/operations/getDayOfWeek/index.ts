import { Day } from "@models/day";
import { DayOfWeek } from "@models/dayOfWeek";

export function getDayOfWeek(day: Day): DayOfWeek {
    const floor = (value: number) => value - value % 1;

    const d = day.value;
    const m = day.month.value;
    const c = floor(day.month.year.value / 100);
    const y = (m < 3) ? day.month.year.value - 1 : day.month.year.value;

    const w = (d + floor(2.6 * m - 0.2) - 2 * c + y + floor(y / 4) + floor(c / 4)) % 7
    return w;
}