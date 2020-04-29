import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Box,
} from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import jobs from '../../data/jobs'

const Job = (props: any) => (
  <>
    <Typography variant="h5">{props.job.role}</Typography>
    <Typography variant="subtitle1">
      {props.job.company}, {props.job.from}-{props.job.to}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
      {props.job.country}
    </Typography>

    <List>
      {props.job.responsibilities.map((item: string) => (
        <ListItem key={item}>
          <ListItemText>{item}.</ListItemText>
        </ListItem>
      ))}
    </List>
    {props.job.skills.map((label: string) => (
      <Box mr={1} key={label} clone>
        <Chip label={label} color="primary" />
      </Box>
    ))}
  </>
)

const WorkExperience = () => {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <PageSubTitle text="Work Experience" />

          {jobs.map((job: any) => (
            <Job job={job} key={job.company} />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkExperience
