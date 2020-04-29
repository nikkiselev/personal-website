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
import { Job as JobType } from '../../types'

type Props = {
  job: JobType
}

const Job = ({
  job: { role, company, from, to, country, responsibilities, skills },
}: Props) => (
  <>
    <Typography variant="h5">{role}</Typography>
    <Typography variant="subtitle1">
      {company}, {from}-{to}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
      {country}
    </Typography>

    <List>
      {responsibilities.map((item: string) => (
        <ListItem key={item}>
          <ListItemText>{item}.</ListItemText>
        </ListItem>
      ))}
    </List>
    {skills.map((label: string) => (
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
