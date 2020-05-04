import React from 'react'
import { Grid, Box } from '@material-ui/core'

import { Category } from '../../types'
import SkillsCategory from './SkillsCategory'
import categories from '../../data/skills'

export default () => {
  const items = categories.map((item: Category) => (
    <SkillsCategory category={item} key={item.name} />
  ))

  return (
    <Box mt={5}>
      <Grid container spacing={4}>
        {items}
      </Grid>
    </Box>
  )
}
