import Image from 'next/image';

const Product = () => {
  return (
    <div className="section">
      <div className="inner-container flex flex-col lg:flex-row">
        <div>
          <img
            src="/product.png"
            alt="The UU App"
            className="rounded-2xl px-0 mb-[50px] lg:max-w-[700px] lg:mb-0 xl:mr-[50px]"
          />
        </div>
        <div className="col">
          <h3>TAKE CREATIVE CONTROL</h3>
          <h2>
            The Underground Universal <span className="red-text">App</span>
          </h2>
          <p className="mb-10">
            We give you the tools to seamlessly become an artist who deserves
            recognition. Discover new talent and collaborate with them on a
            project you're passionate about while getting all the support you
            need as a rising artist.
          </p>
          <div className="button-1">Join waitlist</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
