import { type FC } from "react";
import { formatMonthYear, toIsoMonth } from "../../../utils";

interface DateRangeProps {
  startDate: Date;
  endDate: Date | null;
}

const DateRange: FC<DateRangeProps> = ({ startDate, endDate }) => (
  <p className="text-base italic mt-1">
    <time dateTime={toIsoMonth(startDate)}>{formatMonthYear(startDate)}</time>
    {" - "}
    {endDate ? (
      <time dateTime={toIsoMonth(endDate)}>{formatMonthYear(endDate)}</time>
    ) : (
      "Present"
    )}
  </p>
);

export default DateRange;
