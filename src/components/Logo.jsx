const Logo = () => {
  return (
    <a href="#" className="flex items-center">
      <img
        src="/assets/saw.png"
        className="h-32 mr-2"
        alt="NEDM Bonanza Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        June 28-30, 2024 <br />
        Litchfield, NH
      </span>
    </a>
  );
};

export default Logo;
