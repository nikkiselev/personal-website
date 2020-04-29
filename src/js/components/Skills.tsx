import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'
import React from 'react'
import skills from '../../data/skills'
import { Skill } from '../../types'

type Props = {
  skill: Skill
}

const SkillItem = (props: Props) => {
  const { name, years } = props.skill

  const text = `${years} year${years > 1 ? 's' : ''}`

  return (
    <ListItem>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>{text}</ListItemSecondaryAction>
    </ListItem>
  )
}

export default () => (
  <List>
    {skills.map((skill: Skill) => (
      <SkillItem skill={skill} key={skill.id} />
    ))}
  </List>
)
