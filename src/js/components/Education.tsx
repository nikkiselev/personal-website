import { Container } from '@material-ui/core'
import JobsItem from './JobsItem'
import PageSection from './PageSection'
import content from 'content/home.json'

const Education = () => (
  <PageSection>
    <Container maxWidth="md">
      <JobsItem job={content.education} />
    </Container>
  </PageSection>
)

export default Education
