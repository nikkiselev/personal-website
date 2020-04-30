import React from 'react'
import { Grid } from '@material-ui/core'

import { Category } from '../../types'
import SkillsCategory from './SkillsCategory'
import categories from '../../data/skills'

export default () => {
  const items = categories.map((item: Category) => (
    <SkillsCategory category={item} key={item.name} />
  ))

  return (
    <Grid container spacing={5}>
      {items}
    </Grid>
  )
}
