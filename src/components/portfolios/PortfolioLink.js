import { NavLink } from "react-router-dom";
import classes from "./PortfolioLink.module.css"

const PortfolioLink = ({ to, pname, marketValue }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={classes["portfolios__link"]}
        style={
          ({isActive}) => {
            if (isActive) {
              return {
                backgroundColor: "hsl(var(--clr-bg1-200))",
                fontWeight: "var(--fw-base-700)"
              }
            }
          }
        }
      >
        <span>{pname}</span>
        <span>{marketValue}</span>
      </NavLink>
    </li>
  );
}

export default PortfolioLink;