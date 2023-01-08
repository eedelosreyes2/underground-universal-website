import { IconContext } from 'react-icons';
import { BsDiscord, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="p-5 py-10">
      <div className="inner-container flex flex-col justify-between gap-28 sm:flex-row sm:items-end">
        <div className="flex flex-col items-center sm:items-start">
          <h3>See what we're up to</h3>
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
            {/* <IconContext.Provider value={{ size: '1.15em' }}>
            <a
              href="https://www.linkedin.com/company/underground-universal"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </IconContext.Provider> */}
            <IconContext.Provider value={{ size: '1.3em' }}>
              <a
                href="https://www.tiktok.com/@undergrounduniversal"
                target="_blank"
                rel="noreferrer"
              >
                <SiTiktok />
              </a>
            </IconContext.Provider>
          </div>
        </div>

        <h3 className="m-0 text-center">
          COPYRIGHT @ {new Date().getFullYear()} UNDERGROUND UNIVERSAL
        </h3>
      </div>
    </div>
  );
};

export default Footer;
