const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
});

export function formatMonthYear(date: Date): string {
    return formatter.format(date);
}

export function toIsoMonth(date: Date): string {
    return date.toISOString().slice(0, 7);
}
