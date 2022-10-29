import Join from "../components/sections/Join";
import Landing from "../components/sections/Landing";
import Mission from "../components/sections/Mission";
import Problem from "../components/sections/Problem";
import Product from "../components/sections/Product";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <div>
      <Landing />
      <Mission />
      <Problem />
      <Product />
      <Services />
      <Join />
    </div>
  );
}
