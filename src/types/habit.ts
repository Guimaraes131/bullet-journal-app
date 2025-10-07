export type Habit = {
  id: number,
  name: string,
  metric: Metric,
  bullets: Bullet[],
}

export type PostHabit = {
  name: string,
  metric: Metric,
}

type Bullet = {
  id: number,
  quantity: number,
}

export enum Metric {
  Milliliters = "MILLILITERS",
  Meters = "METERS",
  Pages = "PAGES",
  Minutes = "MINUTES",
}