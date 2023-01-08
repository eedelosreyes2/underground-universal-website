import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';

const Landing = ({
  scrollToMission,
  scrollToProblem,
  scrollToProduct,
  scrollToServices,
}) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    console.log(navOpen);
  }, [navOpen]);

  const handleNavClick = (scrollToSection) => {
    scrollToSection();
    setNavOpen(!navOpen);
  };

  return (
    <div
      className="section col h-[650px] bg-no-repeat bg-cover bg-center flex flex-col pt-5"
      style={{ backgroundImage: 'url(landing-img.jpg)' }}
    >
      <div className="inner-container mb-8 sm:mb-0">
        {/* Header sm */}
        <div className="mb-20 flex justify-between items-center md:hidden">
          <Image
            src="/logo.png"
            width={142}
            height={42}
            alt="Logo"
            className="h-fit"
          />
          <div onClick={() => setNavOpen(!navOpen)} className="cursor-pointer">
            <AiOutlineMenu />
          </div>
          {navOpen && (
            <div className="absolute flex justify-center p-7 bg-black top-0 left-0 right-0">
              <div
                onClick={() => setNavOpen(!navOpen)}
                className="absolute right-8 cursor-pointer"
              >
                <IconContext.Provider
                  value={{
                    size: '1.2em',
                    style: { marginTop: '5px', marginRight: '-5px' },
                  }}
                >
                  <AiOutlineClose />
                </IconContext.Provider>
              </div>
              <div className="flex flex-col gap-12 pt-2 items-center">
                <h3
                  onClick={() => handleNavClick(scrollToMission)}
                  className="nav-item"
                >
                  Mission
                </h3>
                <h3
                  onClick={() => handleNavClick(scrollToProblem)}
                  className="nav-item"
                >
                  Problem
                </h3>
                <h3
                  onClick={() => handleNavClick(scrollToProduct)}
                  className="nav-item"
                >
                  Product
                </h3>
                <h3
                  onClick={() => handleNavClick(scrollToServices)}
                  className="nav-item"
                >
                  Services
                </h3>
                <a
                  href="https://form.typeform.com/to/clj1rqp5"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <div className="button-1 bg-red-600">Join</div>
                </a>
              </div>

              {/* <div
                onClick={() => setNavOpen(!navOpen)}
                className="cursor-pointer"
              >
                X
              </div> */}
            </div>
          )}
        </div>

        {/* Header md-up */}
        <div className="justify-between md:mb-28 hidden md:flex">
          <Image
            src="/logo.png"
            width={142}
            height={42}
            alt="Logo"
            className="h-fit"
          />
          <div className="flex gap-12 items-center">
            <h3 onClick={scrollToMission} className="nav-item">
              Mission
            </h3>
            <h3 onClick={scrollToProblem} className="nav-item">
              Problem
            </h3>
            <h3 onClick={scrollToProduct} className="nav-item">
              Product
            </h3>
            <h3 onClick={scrollToServices} className="nav-item">
              Services
            </h3>
            <a
              href="https://form.typeform.com/to/clj1rqp5"
              target="_blank"
              rel="noreferrer"
            >
              <div className="button-1 bg-red-600">Join</div>
            </a>
          </div>
        </div>

        {/* Copy */}
        <h1>
          The Hip-Hop label that works for the{' '}
          <span className="red-text">artist</span>
        </h1>
        <p className="p-big mb-28">
          It's your music, your art. We take 0% of your royalties.
        </p>
        <div className="flex items-start gap-5">
          <div onClick={scrollToMission} className="button-1">
            Learn more
          </div>
          <a
            href="https://discord.com/invite/KNUG3yTsT8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="button-1">
              <div className="hidden sm:block">Join Discord</div>
              <div className="sm:hidden">
                <IconContext.Provider value={{ size: '2em' }}>
                  <a
                    href="https://discord.com/invite/KNUG3yTsT8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiDiscord />
                  </a>
                </IconContext.Provider>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
