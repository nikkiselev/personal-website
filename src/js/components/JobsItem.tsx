import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Chip,
  Box,
} from '@material-ui/core'
import { Job as JobType } from '../types'

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
      <br />
      <Typography variant="caption">{props.job.place}</Typography>

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
    </Box>
  )
}

export default JobsItem
