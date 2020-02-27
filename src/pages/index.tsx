import Head from 'next/head'
import { useEffect } from 'react';

const Home = () => {

  // useEffect(() => {

  //   if (process.env.NODE_ENV === 'production') {
  //     window.dataLayer = window.dataLayer || [];

  //     function gtag() {
  //         dataLayer.push(arguments);
  //     }
  //     gtag('js', new Date());

  //     gtag('config', 'UA-135544092-1');
  //   }
  // }, []);

  return (
    <div>
      <Head>
        <title>Nikolai Kiselev - full stack web developer</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135544092-1" />
      </Head>

      <div>
          <div className="row">

            {/* <div className="col"></div> */}
              <h1>Hi, I'm Nikolai</h1>


              {/* <div className="avatar"></div> */}


              {/* <a href="mailto:nik@kiselev.dev">nik@kiselev.dev</a>
              <div className="links">
                  <a href="https://www.upwork.com/fl/nikolayk" target="_blank">Upwork</a>
                  <a href="https://github.com/nikkiselev" target="_blank">GitHub</a>
                  <a href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile" target="_blank">Stack
                      Overflow</a>
              </div> */}
              {/* <p className="copyright">© 2019 Nikolai Kiselev</p> */}
          </div>
      </div>
    </div>
  );
};

export default Home
