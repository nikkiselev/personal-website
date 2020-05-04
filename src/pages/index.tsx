import SubHeader from '../js/components/SubHeader'
import SkillsSection from '../js/components/SkillsSection'
import Jobs from '../js/components/Jobs'
import Bio from '../js/components/Bio'
import PageSection from '../js/components/PageSection'
import { Box } from '@material-ui/core'

const Home = () => {
  return (
    <>
      <SubHeader />

      <PageSection withBg>
        <Bio />
        <Box mt={{ xs: 5, sm: 10, md: 15 }}>
          <SkillsSection />
        </Box>
      </PageSection>
      <Jobs />
    </>
  )
}

export default Home
