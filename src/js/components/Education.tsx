import { Container } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import JobsItem from './JobsItem'
import PageSection from './PageSection'
import content from 'content/home.json'

const Education = () => (
  <PageSection>
    <Container maxWidth="md">
      <PageSubTitle text="Education" />
      <JobsItem job={content.education} />
    </Container>
  </PageSection>
)

export default Education
