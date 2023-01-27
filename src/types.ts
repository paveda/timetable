export type DayData = {
  title: string
  agenda: EventData[]
}

export type EventColor =
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'

export type EventData = {
  name: string
  start: number
  end: number
  color?: EventColor
  tags?: string[]
}

export type WeekData = {
  timeRange: [number, number]
  days: Record<string, DayData>
}
