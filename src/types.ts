export type DayData = {
  title: string
  agenda: EventData[]
}

export type EventData = {
  name: string
  start: number
  end: number
  colour?: string
  tags?: string[]
}

export type WeekData = {
  timeRange: [number, number]
  days: Record<string, DayData>
}
