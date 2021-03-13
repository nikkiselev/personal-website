import Skills from './Skills'

const year = 2014
const years = new Date().getFullYear() - year

const SkilsSection = () => {
  return (
    <div>
      <span>
        These are the skills I've picked up over my {years} years as a
        professional developer.
      </span>
      <Skills />
    </div>
  )
}

export default SkilsSection
