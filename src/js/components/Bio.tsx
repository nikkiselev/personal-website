import content from 'content/home.json'

const Bio = () => {
  return (
    <div>
      <h2>{content.bioTitle}</h2>
      <p>
        I still remember my first encounter with programming in elementary
        school at the age of 8. At 12, I was enrolled in a programming course. I
        wrote small scripts and apps using Pascal.
      </p>
      <p>
        In 2004, I built my first website about the history of Earth. It wasn't
        great but it made me realize my passion for programming. That led me
        toward getting a Bachelor degree in Computer Science.{' '}
      </p>
      <p>
        Fast forward to today, I build web applications as a freelance
        full-stack web developer.
      </p>
    </div>
  )
}

export default Bio
