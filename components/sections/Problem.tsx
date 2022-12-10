const Problem = ({ problemRef }) => {
  return (
    <div ref={problemRef} className="section col">
      <div className="inner-container">
        <h3>The Problem With The Industry Today</h3>
        <div className="grid gap-20 lg:flex">
          <div>
            <h2>
              It's <span className="red-text">your</span> art
            </h2>
            <p>
              The top record labels have almost complete control over an
              artist's music and growth, especially those new to the industry
              who typically only receive less than 17-20% of their royalties.
            </p>
          </div>
          <div>
            <h2>Artist Support</h2>
            <p>
              When you sign to a record label you often lose creative control.
              As a member of a non exclusive label, provide yourself freedom and
              choose your time to create and release unlimited music.
            </p>
          </div>

          <div>
            <h2>Collaboration</h2>
            <p>
              Oversaturation of so many types of artists in different places
              around the world stalls the creation of any music at all. This
              results in stagnation of many artist careers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
