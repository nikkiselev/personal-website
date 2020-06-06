import { Container } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import JobsItem from './JobsItem'
import PageSection from './PageSection'

const uni = {
  role: 'Bachelor of Applied Science (B.A.Sc.), Computer science',
  company: 'Novosibirsk State Technical University',
  from: 2009,
  to: 2013,
  type: '',
  place: 'Novosibirsk, Russia',
  responsibilities: [],
  skills: [],
}

const Education = () => (
  <PageSection withBg>
    <Container maxWidth="md">
      <PageSubTitle text="Education" />
      <JobsItem job={uni} />
    </Container>
  </PageSection>
)

export default Education
