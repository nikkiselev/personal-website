import Footer from './footer'
import Head from 'next/head'

const App: React.FC = (props) => (
  <div className="d-flex flex-column h-100">
    <Head>
      <title>Nikolai Kiselev - full stack web developer</title>
      <link rel="icon" href="/favicon.ico" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-135544092-1"
      />
    </Head>
    {props.children}
    <Footer />
  </div>
)

export default App
