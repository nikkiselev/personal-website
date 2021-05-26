import content from 'content/home.json'
import { useState } from 'react'
import JobsItem from './JobsItem'

const ChevronDown = () => (
  <svg
    className="inline"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    data-supported-dps="16x16"
    fill="currentColor"
    width="16"
    height="16"
    focusable="false"
  >
    <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z" />
  </svg>
)

const Jobs = () => {
  const step = 5
  const [showNumber, setShowNumber] = useState(step)
  const numberOfHiddenJobs = content.jobs.length - showNumber

  return (
    <div className="bg-gray-50 shadow-lg dark:bg-another-gray rounded-3xl p-2 sm:p-5 xl:p-6 ">
      <ul className="jobs">
        {content.jobs.slice(0, showNumber).map((job: any) => (
          <JobsItem job={job} key={job.company} />
        ))}
      </ul>
      {numberOfHiddenJobs > 0 && (
        <span
          className="block cursor-pointer mt-5"
          onClick={() => setShowNumber(showNumber + step)}
        >
          Show {numberOfHiddenJobs} more experiences <ChevronDown />{' '}
        </span>
      )}
    </div>
  )
}

export default Jobs
