import SubHeader from '../js/components/SubHeader'
import SkillsSection from '../js/components/SkillsSection'
import Jobs from '../js/components/Jobs'
import Bio from '../js/components/Bio'
import PageSection from '../js/components/PageSection'

const Home = () => {
  return (
    <>
      <SubHeader />

      <PageSection withBg>
        <Bio />
        <SkillsSection />
      </PageSection>
      <Jobs />
    </>
  )
}

export default Home
