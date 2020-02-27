import Head from 'next/head'
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {

    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || [];

      function gtag() {
          dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-135544092-1');
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Nikolai Kiselev - full stack web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135544092-1" />
      </Head>

      <div className="container">
          <div className="row">
              <h1>Nikolai Kiselev</h1>
              <div className="avatar"></div>
              <p style={{textAlign: "center"}}>
                  Hi. I'm a full stack web developer with a passion for coding. <br/>
                  Building seamless web applications is what I do best.
              </p>
              <p style={{textAlign: "center"}}>If you need my help with something or have a cool project to work on, reach
                  out and let's have a chat!</p>
              <a href="mailto:nik@kiselev.dev">nik@kiselev.dev</a>
              <br/>
              <div className="links">
                  <a href="https://www.upwork.com/fl/nikolayk" target="_blank">Upwork</a>
                  <a href="https://github.com/nikkiselev" target="_blank">GitHub</a>
                  <a href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile" target="_blank">Stack
                      Overflow</a>
              </div>
              <p className="copyright">© 2019 Nikolai Kiselev</p>
          </div>
      </div>
    </div>
  );
};

export default Home
