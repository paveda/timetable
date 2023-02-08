export type DayData = {
  title: string
  agenda: EventData[]
}

export type TimeStr = `${number}h${number}m`

export type DayName =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

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
  start: number | TimeStr
  end: number | TimeStr
  color?: EventColor
  tags?: string[]
}

export type WeekData = {
  timeRange: [number, number]
  days: {
    [K in DayName]?: DayData
  }
}
