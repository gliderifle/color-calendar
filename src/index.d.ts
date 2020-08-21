export interface CalendarOptions {
  id?: string;
  weekdayType?: string;
  monthDisplayType?: string;
  eventsData?: EventData[];
  startWeekday?: StartWeekday;
  theme?: string;
  color?: string;
  fontFamily1?: string;
  fontFamily2?: string;
  headerColor?: string;
  headerBackgroundColor?: string;
  dropShadow?: boolean;
  border?: boolean;
  dayClicked?: (currentDate?: Date, filteredEventsThisDate?: EventData) => void;
  monthChanged?: (currentDate?: Date) => void;
  dateChanged?: (currentDate?: Date) => void;
}

export interface EventData {
  start: string,
  end: string,
  [key: string]: any,
}

export interface Day {
  day: number,
  selected?: boolean,
}

export type MonthDisplayType = "short" | "long";

export  type WeekdayType = "short" | "long-upper" | "long-lower";

export type Weekdays = [string, string, string, string, string, string, string];

export type StartWeekday =  0 | 1 | 2 | 3 | 4 | 5 | 6;