import Head from 'next/head';
import { useRef } from 'react';
import Footer from '../components/sections/Footer';
import Join from '../components/sections/Join';
import Landing from '../components/sections/Landing';
import Mission from '../components/sections/Mission';
import Problem from '../components/sections/Problem';
import Product from '../components/sections/Product';
import Services from '../components/sections/Services';

export default function Home() {
  const missionRef = useRef(null);
  const problemRef = useRef(null);
  const productRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToMission = () => {
    missionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProblem = () => {
    problemRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProduct = () => {
    productRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Head>
        <title>Underground Universal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Landing
        scrollToMission={scrollToMission}
        scrollToProblem={scrollToProblem}
        scrollToProduct={scrollToProduct}
        scrollToServices={scrollToServices}
      />
      <Mission missionRef={missionRef} />
      <Problem problemRef={problemRef} />
      <Product productRef={productRef} />
      <Services servicesRef={servicesRef} />
      <Join />
      <Footer />
    </div>
  );
}
