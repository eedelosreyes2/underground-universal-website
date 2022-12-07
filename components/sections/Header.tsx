import Image from 'next/image';

const Header = () => {
  return (
    <div className="hidden md:block px-[30px]">
      <div
        className="inner-container absolute left-0 right-0 
      flex justify-between items-center py-5 mx-auto"
      >
        <Image
          src="/logo.png"
          width={142}
          height={42}
          alt="Logo"
          className="h-fit"
        />
        <div className="flex gap-12 items-center">
          <h3 className="mb-0">Mission</h3>
          <h3 className="mb-0">Problem</h3>
          <h3 className="mb-0">Product</h3>
          <h3 className="mb-0">Services</h3>
          <a
            href="https://form.typeform.com/to/vZGqdwFw"
            target="_blank"
            rel="noreferrer"
          >
            <div className="button-1 bg-red-600">Join</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
