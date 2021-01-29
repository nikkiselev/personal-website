import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'
import { Divider } from '@material-ui/core'

const Home = () => {
  return (
    <>
      <SubHeader />
      <Divider variant="middle" />
      <Bio />
      <Divider variant="middle" />
      <SkillsSection />
      <Divider variant="middle" />
      <Jobs />
      <Divider variant="middle" />
      <Education />
    </>
  )
}

export default Home
