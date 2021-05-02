import content from 'content/home.json'

const Bio = () => {
  return (
    <div>
      <h2>{content.bioTitle}</h2>
      <p>{content.bio}</p>
    </div>
  )
}

export default Bio
