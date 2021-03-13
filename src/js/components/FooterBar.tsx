const year = new Date().getFullYear()

const FooterBar = () => {
  return (
    <div className="container text-center text-sm">
      &copy; Nikolai Kiselev {year}
    </div>
  )
}

export default FooterBar
