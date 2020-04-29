export type MenuItem = {
  id: number
  label: string
  href: string
}

export type Job = {
  role: string
  company: string
  country: string
  from: number
  to: number | string
  responsibilities: string[]
  skills: string[]
}

export type Skill = {
  id: number
  name: string
  years: number
}
