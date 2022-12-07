import { IconContext } from 'react-icons';
import { BsDiscord, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="p-5 py-10">
      logo
      <div className="inner-container flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex gap-6 items-center justify-center">
          <IconContext.Provider value={{ size: '1.25em' }}>
            <a
              href="https://discord.com/invite/KNUG3yTsT8"
              target="_blank"
              rel="noreferrer"
            >
              <BsDiscord />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <a
              href="https://www.instagram.com/undergrounduniversal"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://twitter.com/UNDERGROUNDUV"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '1.15em' }}>
            <a
              href="https://www.linkedin.com/company/underground-universal"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </IconContext.Provider>
        </div>
        <h3 className="m-0 text-center">
          COPYRIGHT @ 2022 UNDERGROUND UNIVERSAL
        </h3>
      </div>
    </div>
  );
};

export default Header;
