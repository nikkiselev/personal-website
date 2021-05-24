import content from 'content/home.json'
import JobsItem from './JobsItem'

const Jobs = () => {
  return (
    <ul className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-2 sm:p-5 xl:p-6 jobs">
      {content.jobs.map((job: any) => (
        <JobsItem job={job} key={job.company} />
      ))}
    </ul>
  )
}

export default Jobs
