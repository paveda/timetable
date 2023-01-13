export type DayData = {
  name: string
  title: string
  agenda: EventData[]
}

export type EventData = {
  name: string
  start: number
  end: number
}

export type WeekData = {
  days: Record<string, DayData>
}
