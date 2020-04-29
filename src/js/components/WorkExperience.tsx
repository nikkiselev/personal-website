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

const jobs = [
  {
    role: 'Full Stack Web Developer',
    company: 'ITConstruct',
    from: 2014,
    to: 2015,
    responsibilities: [
      'Developed e-commerce websites',
      'Provided tech customer support',
    ],
    skills: ['Javascript', 'PHP', 'MySQL', 'jQuery', 'CSS', 'BEM', 'CMS'],
  },
]

const WorkExperienceItem = (props: any) => (
  <>
    <Typography variant="h5">{props.job.role}</Typography>
    <Typography variant="subtitle1">
      {props.job.company}, {props.job.from}-{props.job.to}
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
            <WorkExperienceItem job={job} key={job.company} />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkExperience
