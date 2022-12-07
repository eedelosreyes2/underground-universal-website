import Head from 'next/head';
import { useRef } from 'react';
import Footer from '../components/sections/Footer';
import Join from '../components/sections/Join';
import Header from '../components/sections/Header';
import Landing from '../components/sections/Landing';
import Mission from '../components/sections/Mission';
import Problem from '../components/sections/Problem';
import Product from '../components/sections/Product';
import Services from '../components/sections/Services';

export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Head>
        <title>Underground Universal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {/* <Header /> */}
      <Landing executeScroll={executeScroll} />
      <Mission myRef={myRef} />
      <Problem />
      <Product />
      <Services />
      <Join />
      <Footer />
    </div>
  );
}
