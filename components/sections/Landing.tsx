import Image from 'next/image';

const Landing = ({
  scrollToMission,
  scrollToProblem,
  scrollToProduct,
  scrollToServices,
}) => {
  return (
    <div
      className="section col h-[650px] bg-no-repeat bg-cover bg-center flex flex-col md:pt-5 "
      style={{ backgroundImage: 'url(landing-img.jpg)' }}
    >
      <div className="inner-container mb-8 sm:mb-0">
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
              href="https://form.typeform.com/to/vZGqdwFw"
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
        <p className="p-big mb-20">
          It's your music, your art. We take 0% of your royalties.
        </p>
        <div onClick={scrollToMission} className="button-1">
          Learn more
        </div>
      </div>
    </div>
  );
};

export default Landing;
