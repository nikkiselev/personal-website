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
import PageSection from './PageSection'

type Props = {
  job: JobType
}

const Job = ({
  job: { role, company, from, to, place, responsibilities, skills },
}: Props) => (
  <Box mb={3}>
    <Typography variant="h5">{role}</Typography>
    <Typography variant="subtitle1">
      {company}, {from} - {to}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
      {place}
    </Typography>

    <List>
      {responsibilities.map((item: string) => (
        <ListItem key={item}>
          <ListItemText>{item}.</ListItemText>
        </ListItem>
      ))}
    </List>
    {skills.map((label: string) => (
      <Box m={0.5} key={label} clone>
        <Chip size="small" label={label} color="primary" variant="outlined" />
      </Box>
    ))}
  </Box>
)

const Jobs = () => {
  return (
    <PageSection>
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
    </PageSection>
  )
}

export default Jobs
