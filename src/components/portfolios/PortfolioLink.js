import { NavLink } from "react-router-dom";
import "./PortfolioLink.css"

const PortfolioLink = ({ to, children }) => {
  return (
    <li>
      <NavLink to={to} className="portfolios__link">
        {children}
      </NavLink>
    </li>
  );
}

export default PortfolioLink;