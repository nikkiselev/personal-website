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
    {skills.map((skill: Skill) => (
      <SkillItem skill={skill} />
    ))}
  </List>
)
