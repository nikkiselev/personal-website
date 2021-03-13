import { Job as JobType } from 'js/types'

type Props = {
  job: JobType
}

const JobsItem = (props: Props) => {
  const duration = props.job.from + ' - ' + props.job.to

  return (
    <div>
      <p className="font-bold text-lg">{props.job.role}</p>
      <p>
        {props.job.company}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{props.job.type}
      </p>
      <p>{duration}</p>

      {props.job.place && (
        <div>
          <span>{props.job.place}</span>
        </div>
      )}

      <ul className="py-1">
        {props.job.responsibilities.map((item: string) => (
          <li className="my-2" key={item}>
            &bull; {item}.
          </li>
        ))}
      </ul>
      {/* {props.job.skills.map((label: string) => (
        <span key={label}>{label}</span>
      ))} */}

      {!props.job.last && <hr className="divider" />}
    </div>
  )
}

export default JobsItem
