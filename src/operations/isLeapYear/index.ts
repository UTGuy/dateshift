import { Year } from '@models/year';

export function isLeapYear(year: Year): boolean {
    const isDisivibleBy4 = year.value % 4 === 0;
    const yearIsDivisibleBy100 = year.value % 100 === 0;
    if (isDisivibleBy4 && !yearIsDivisibleBy100)
        return true;

    const yearIsDivisibleBy400 = year.value % 400 === 0;
    return yearIsDivisibleBy400;
}