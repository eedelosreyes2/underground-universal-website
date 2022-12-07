const Services = ({ servicesRef }) => {
  return (
    <div ref={servicesRef} className="section col">
      <div className="inner-container">
        <h3>Get the support you need</h3>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="card">
            <h2>Collaboration & Sharing</h2>
            <p>
              Find fellow underground artists, share your music, and create
              together.
            </p>
          </div>
          <div className="card">
            <h2>Studio Booking</h2>
            <p>
              We book, you create. Choose your studio and receive hassle-free
              booking.
            </p>
          </div>
          <div className="card">
            <h2>Mixing & Mastering</h2>
            <p>
              Get in-house, online, and in-person studio options available near
              you.
            </p>
          </div>
          <div className="card">
            <h2>Publishing</h2>
            <p>
              Seamless publishing provided by Songtrust. Exclusive to premium
              members.
            </p>
          </div>
          <div className="card">
            <h2>Distribution</h2>
            <p>
              Effortless music distribution made possible by Music Gateway. Get
              unlimited uploads to 300+ digital streaming platforms worldwide
              including Apple Music and Spotify.
            </p>
          </div>
          <div className="card">
            <h2>
              <span className="red-text">Artist</span> Promotion
            </h2>
            <p>
              Have the recognition you deserve with guaranteed exposure,
              audience growth, community, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
