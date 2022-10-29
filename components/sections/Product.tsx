import Image from "next/image";

const Product = () => {
  return (
    <div className="section">
      <div className="inner-container flex flex-col lg:flex-row">
        <div>
          <img
            src="/temp-img.svg"
            alt="The UU App"
            className="rounded-2xl lg:max-w-[700px]"
          />
        </div>
        <div>
          <h3>Find Collaborators</h3>
          <h2>
            The Underground Universal <span className="red-text">App</span>
          </h2>
          <p>
            We give you the tools to easily find fellow artists who deserve
            recognition. Discover new talent and collaborate with them on a
            project you're passionate about while getting all the support you
            need as an underground artist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
