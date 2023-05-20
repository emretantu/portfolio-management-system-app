import { NavLink } from "react-router-dom";
import "./PortfolioLink.css"

const PortfolioLink = ({ to, pname, marketValue }) => {
  return (
    <li>
      <NavLink to={to} className="portfolios__link">
        <span>{pname}</span>
        <span>{marketValue}</span>
      </NavLink>
    </li>
  );
}

export default PortfolioLink;