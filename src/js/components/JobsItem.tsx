import { Job as JobType } from 'js/types'

type Props = {
  job: JobType
}

const JobsItem = (props: Props) => {
  const duration = props.job.from + ' - ' + props.job.to

  return (
    <li>
      <article>
        <div className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white">
          <h3 className="text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
            {props.job.role}
          </h3>
          {/* <time dateTime="2021-04-05T19:00:00.000Z" className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"><svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible text-cyan-400"><circle cx="6" cy="6" r="6" fill="currentColor"></circle><circle cx="6" cy="6" r="11" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M 6 18 V 500" fill="none" stroke-width="2" stroke="currentColor" className="text-gray-200"></path></svg>Apr 6, 2021</time> */}
          <time
            dateTime="2021-03-15T16:30:00.000Z"
            className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
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
          <div className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
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
