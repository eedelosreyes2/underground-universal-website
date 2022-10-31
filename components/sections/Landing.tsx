const Landing = () => {
  return (
    <div
      className="section col h-[620px] bg-no-repeat bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url(landing-img.jpg)" }}
    >
      <div className="inner-container">
        <h1>
          The Hip-Hop label that works for the{" "}
          <span className="red-text">artist</span>
        </h1>
        <p className="p-big">
          It’s your music, your art. We take 0% of your royalties.
        </p>
      </div>
    </div>
  );
};

export default Landing;
