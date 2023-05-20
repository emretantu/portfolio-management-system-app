import { Link } from "react-router-dom";

const PortfolioLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
}

export default PortfolioLink;