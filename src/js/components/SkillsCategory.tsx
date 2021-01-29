import { Category } from 'js/types'
import { Grid, Box, Typography } from '@material-ui/core'

type Props = {
  category: Category
}

const SkillsCategory = (props: Props) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Box height="100%" textAlign="middle">
        <Typography align="left" variant="h6">
          {props.category.name}
        </Typography>
        <Typography variant="body1" align="left">
          {props.category.stack}
        </Typography>
      </Box>
    </Grid>
  )
}

export default SkillsCategory
