import { Job as JobType } from 'js/types'

type Props = {
  job: JobType
}

const JobsItem = (props: Props) => {
  const duration = props.job.from + ' - ' + props.job.to

  return (
    <li>
      <article>
        <div className="grid items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white">
          <h3 className="text-gray-900  mb-1 ml-9 ">{props.job.role}</h3>
          <time
            dateTime="2021-03-15T16:30:00.000Z"
            className="row-start-1 flex items-center font-medium mb-1 "
          >
            <svg
              viewBox="0 0 12 12"
              className="w-3 h-3 mr-6 overflow-visible text-gray-300"
            >
              <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
              <path
                d="M 6 -6 V -30"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                className="text-gray-200"
              ></path>
              <path
                d="M 6 18 V 500"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                className="text-gray-200"
              ></path>
            </svg>
            {duration}
          </time>
          <div className="ml-9">
            <span>
              {props.job.company}&nbsp;&nbsp;&middot;&nbsp;&nbsp;
              {props.job.type}
            </span>

            {props.job.place && (
              <div>
                <span>{props.job.place}</span>
              </div>
            )}

            <ul>
              {props.job.responsibilities.map((item: string) => (
                <li className="my-2" key={item}>
                  {item}.
                </li>
              ))}
            </ul>
          </div>
          {/* {!props.job.last && <hr/>} */}
        </div>
      </article>
    </li>
  )
}

export default JobsItem
