import React from 'react'
import { Grid, Box } from '@material-ui/core'

import { Category } from 'js/types'
import SkillsCategory from './SkillsCategory'
import content from 'content/home.json'

const Skills = () => {
  const items = content.skills.map((item: Category) => (
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

export default Skills
