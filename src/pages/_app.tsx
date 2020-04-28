import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/app.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
