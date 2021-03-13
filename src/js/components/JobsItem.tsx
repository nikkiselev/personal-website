import { Job as JobType } from 'js/types'
import ContentDivider from './ContentDivider'

type Props = {
  job: JobType
}

const JobsItem = (props: Props) => {
  const duration = props.job.from + ' - ' + props.job.to

  return (
    <div>
      <span>{props.job.role}</span>
      <span>
        {props.job.company}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{props.job.type}
      </span>
      <br />
      <span>{duration}</span>

      {props.job.place && (
        <div>
          <span>{props.job.place}</span>
        </div>
      )}

      <ul>
        {props.job.responsibilities.map((item: string) => (
          <span key={item}>&bull; {item}.</span>
        ))}
      </ul>
      {props.job.skills.map((label: string) => (
        <span key={label}>{label}</span>
      ))}

      {!props.job.last && <ContentDivider />}
    </div>
  )
}

export default JobsItem
