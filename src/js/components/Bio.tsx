import content from 'content/home.json'

const Bio = () => {
  return (
    <div>
      {content.bioTitle}

      {content.bio.map((text) => (
        <span>{text}</span>
      ))}
    </div>
  )
}

export default Bio
