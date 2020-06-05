import { Container, Grid } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import content from 'content/home.json'
import PageSection from './PageSection'
import JobsItem from './JobsItem'

const Jobs = () => {
  return (
    <PageSection noPb withBg>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <PageSubTitle text="Experience" id="experience" />
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
