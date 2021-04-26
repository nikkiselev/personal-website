const year = new Date().getFullYear()

const FooterBar = () => {
  return (
    <div className="container mx-auto text-center text-sm">
      &copy; Nikolai Kiselev {year}
    </div>
  )
}

export default FooterBar
