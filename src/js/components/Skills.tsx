import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core'
import React from 'react'

type SkillType = { id: number; name: string; years: number }

const skills: SkillType[] = [
  {
    id: 1,
    name: 'Full Stack web developer',
    years: 6,
  },
  {
    id: 1,
    name: 'Javascript / PHP',
    years: 6,
  },
  {
    id: 1,
    name: 'TypeScript',
    years: 5,
  },
  {
    id: 2,
    name: 'React.js / Next.js / Node.js',
    years: 1,
  },

  {
    id: 1,
    name: 'Laravel',
    years: 4,
  },
  {
    id: 2,
    name: 'MySQL / Relational databases',
    years: 8,
  },
  {
    id: 1,
    name: 'AWS',
    years: 4,
  },
  {
    id: 1,
    name: 'Nginx / Apache2',
    years: 5,
  },
  {
    id: 1,
    name: 'Building REST APIs',
    years: 3,
  },
  {
    id: 1,
    name: 'Git / Github / Bitbucket',
    years: 5,
  },
  {
    id: 1,
    name: 'Vue.js',
    years: 2,
  },
]

const Skill = (props: any) => {
  return (
    <ListItem>
      <ListItemText primary={props.skill.name} />
      <ListItemSecondaryAction>
        {props.skill.years} years
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default () => (
  <List dense>
    {skills.map((skill: SkillType) => (
      <Skill skill={skill} />
    ))}
  </List>
)
