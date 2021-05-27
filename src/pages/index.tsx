import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'

const Home = () => {
  return (
    <div className="">
      <div className="">
        <SubHeader />
        <hr />
        <Bio />
        <hr />
        <h2>Skill Set</h2>
        <SkillsSection />
        <hr />
        <h2>Experience</h2>
        <Jobs />
        <hr />
        <h2>Education</h2>
        <Education />
        <hr />
        <h2>Work with me</h2>
      </div>
    </div>
  )
}

export default Home
