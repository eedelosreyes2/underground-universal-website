import { IconContext } from 'react-icons';
import { SiDiscord } from 'react-icons/si';

const Join = () => {
  return (
    <div className="section col bg-neutral-900 bg-opacity-50 mb-[100px] sm:mb-[200px]">
      <div className="inner-container text-center">
        <h2>
          Join the Underground Universal{' '}
          <span className="red-text">Community</span>
        </h2>
        <p className="max-w-[780px] mx-auto pb-10">
          {/* Underground Universal is founded by an underground hip-hop producer
          who saw the need for a label that wouldn't take advantage of creators
          like him. Our belief is because it is your music, your art, your
          royalties should be yours too. Unlike other labels, we don't take
          what's yours. Through our online platform we strive to serve your
          creative needs by providing easy access to collaborators, engineers,
          studios, music distribution and promotion. */}
          Underground Universal is founded by an underground hip-hop producer
          who saw the need for a label that wouldn't take advantage of creators
          like him. Our belief is because it is your music, your art, your
          royalties should be yours too. Unlike other labels, we don't take
          what's yours. Through our online platform we strive to serve your
          creative needs by providing easy access to the functions of a label
          without taking from the artists like one.
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="https://form.typeform.com/to/clj1rqp5"
            target="_blank"
            rel="noreferrer"
          >
            <div className="button-2">Join</div>
          </a>
          <a
            href="https://discord.com/invite/KNUG3yTsT8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="button-2">
              {/* <div className="hidden sm:block">Join Discord</div> */}
              <div className="">
                <IconContext.Provider value={{ size: '1.5em' }}>
                  <SiDiscord />
                </IconContext.Provider>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;
