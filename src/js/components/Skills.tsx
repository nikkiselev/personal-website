import { Grid } from '@material-ui/core'
import React from 'react'
import categories from '../../data/skills'
import { Category } from '../../types'
import SkillsCategory from './SkillsCategory'

export default () => (
  <Grid container spacing={5}>
    {categories.map((category: Category) => (
      <SkillsCategory category={category} key={category.name} />
    ))}
  </Grid>
)
