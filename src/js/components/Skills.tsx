import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Box,
  Divider,
  Typography,
  Chip,
} from '@material-ui/core'
import React from 'react'
import categories from '../../data/skills'
import { Skill, Category } from '../../types'

type Props = {
  category: Category
}

// const SkillItem = (props: Props) => {
//   const { name, years } = props.skill

//   const text = `${years} year${years > 1 ? 's' : ''}`

//   return (
//     <ListItem>
//       <ListItemText primary={name} />
//       <ListItemSecondaryAction>{text}</ListItemSecondaryAction>
//     </ListItem>
//   )
// }

const CategoryItem = (props: Props) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Box height="100%" clone>
        <Card>
          <CardHeader title={props.category.name} />
          <CardContent>
            <List dense>
              {props.category.skills.map((skill: any) => (
                <ListItem>
                  <ListItemText>{skill.name}</ListItemText>
                  <ListItemSecondaryAction>
                    {skill.years} year{skill.years > 1 ? 's' : ''}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Divider />
            <Box textAlign="left">
              {props.category.misc?.map((i: string) => (
                <Box m={0.5} textAlign="left" clone>
                  <Chip
                    size="small"
                    label={i}
                    variant={'outlined'}
                    color="primary"
                  />
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  )
}

export default () => (
  <Grid container spacing={5}>
    {categories.map((category: Category) => (
      <CategoryItem category={category} key={category.name} />
    ))}
  </Grid>
)
