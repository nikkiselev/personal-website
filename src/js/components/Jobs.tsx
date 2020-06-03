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
import content from '../../content/home.json'
import { Job as JobType } from '../../types'
import PageSection from './PageSection'

type Props = {
  job: JobType
}

const Job = ({
  job: { role, company, from, to, place, responsibilities, skills, type },
}: Props) => {
  // const duration = from === to ? from : from + ' - ' + to
  const duration = from + ' - ' + to

  return (
    <Box mb={3}>
      <Typography variant="h6">{role}</Typography>
      <Typography variant="caption">
        {company}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{type}
      </Typography>
      <br />
      <Typography variant="caption">{duration}</Typography>
      <br />
      <Typography variant="caption">{place}</Typography>

      <List dense>
        {responsibilities.map((item: string) => (
          <ListItem key={item}>
            <ListItemText>&bull; {item}.</ListItemText>
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
}

const Jobs = () => {
  return (
    <PageSection noPb withBg>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <PageSubTitle text="Experience" id="experience" />

            {content.jobs.map((job: any) => (
              <Job job={job} key={job.company} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  )
}

export default Jobs
