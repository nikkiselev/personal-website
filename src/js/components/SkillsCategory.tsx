import { Category } from 'js/types'
import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'

type Props = {
  category: Category
}

const SkillsCategory = (props: Props) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Box height="100%" textAlign="middle" clone>
        <Card>
          <CardHeader
            title={props.category.name}
            titleTypographyProps={{ variant: 'h6' }}
          />
          <CardContent>
            <List dense>
              {props.category.skills.map((skill: any) => (
                <ListItem key={skill.name}>
                  <ListItemText>{skill.name}</ListItemText>
                  <ListItemSecondaryAction>
                    {skill.years} year{skill.years > 1 ? 's' : ''}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Box textAlign="left">
              {props.category.misc?.map((i: string) => (
                <Box m={0.5} textAlign="left" clone key={i}>
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

export default SkillsCategory
