import { IconContext } from 'react-icons';
import { BsDiscord, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="p-5 py-10">
      <div className="inner-container flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex gap-6 items-center">
          <IconContext.Provider value={{ size: '1.25em' }}>
            <a href="https://discord.com/invite/KNUG3yTsT8" target="_blank">
              <BsDiscord />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <a
              href="https://www.instagram.com/undergrounduniversal"
              target="_blank"
            >
              <AiFillInstagram />
            </a>
            <a href="https://twitter.com/UNDERGROUNDUV" target="_blank">
              <BsTwitter />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: '1.15em' }}>
            <a
              href="https://www.linkedin.com/company/underground-universal"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </IconContext.Provider>
        </div>
        <h3 className="m-0">COPYRIGHT @ 2022 UNDERGROUND UNIVERSAL</h3>
      </div>
    </div>
  );
};

export default Footer;
