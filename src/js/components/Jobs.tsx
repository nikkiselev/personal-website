import { Container, Grid } from '@material-ui/core'
import content from 'content/home.json'
import PageSection from './PageSection'
import JobsItem from './JobsItem'

const Jobs = () => {
  return (
    <PageSection>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            {content.jobs.map((job: any) => (
              <JobsItem job={job} key={job.company} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  )
}

export default Jobs
