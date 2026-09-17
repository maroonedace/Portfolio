const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
});


export function formatMonthYear(date: string | Date): string {
    return formatter.format(typeof date === "string" ? new Date(date) : date);
}