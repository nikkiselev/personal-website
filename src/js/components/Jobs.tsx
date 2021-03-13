import content from 'content/home.json'
import JobsItem from './JobsItem'

const Jobs = () => {
  return (
    <div>
      {content.jobs.map((job: any) => (
        <JobsItem job={job} key={job.company} />
      ))}
    </div>
  )
}

export default Jobs
