import Head from "next/head";
import Join from "../components/sections/Join";
import Landing from "../components/sections/Landing";
import Mission from "../components/sections/Mission";
import Problem from "../components/sections/Problem";
import Product from "../components/sections/Product";
import Services from "../components/sections/Services";

export default function Home() {
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
      <Landing />
      <Mission />
      <Problem />
      <Product />
      <Services />
      <Join />
    </div>
  );
}
