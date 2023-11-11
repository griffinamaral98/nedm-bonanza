import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`/`}>
      <img
        src="/assets/top.png"
        className="h-16 mr-2 bg-blend-exclusion"
        alt="NEDM Bonanza Logo"
      />
    </Link>
  );
};

export default Logo;
