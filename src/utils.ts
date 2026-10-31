import { easeInOut } from "motion/react";

export const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.25, duration: 0.35, ease: easeInOut },
  },
});

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
