import ContentDivider from './ContentDivider'

type Props = {
  text: string
  color?: any
  id?: string
}

const PageSubTitle = (props: Props) => (
  <>
    <ContentDivider />
    <span>{props.text}</span>
    <ContentDivider />
  </>
)

export default PageSubTitle
