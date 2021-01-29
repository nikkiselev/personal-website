import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Box,
  Divider,
} from '@material-ui/core'
import { Job as JobType } from 'js/types'

type Props = {
  job: JobType
}

const JobsItem = (props: Props) => {
  const duration = props.job.from + ' - ' + props.job.to

  return (
    <Box mb={3}>
      <Typography variant="h6">{props.job.role}</Typography>
      <Typography variant="caption">
        {props.job.company}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{props.job.type}
      </Typography>
      <br />
      <Typography variant="caption">{duration}</Typography>

      {props.job.place && (
        <div>
          <Typography variant="caption">{props.job.place}</Typography>
        </div>
      )}

      <List dense>
        {props.job.responsibilities.map((item: string) => (
          <ListItem key={item}>
            <ListItemText>&bull; {item}.</ListItemText>
          </ListItem>
        ))}
      </List>
      {props.job.skills.map((label: string) => (
        <Box m={0.5} key={label} clone>
          <Chip size="small" label={label} color="primary" variant="outlined" />
        </Box>
      ))}

      <Box mt={3}>{!props.job.last && <Divider />}</Box>
    </Box>
  )
}

export default JobsItem
