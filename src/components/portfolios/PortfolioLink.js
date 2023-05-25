import { NavLink} from "react-router-dom";
import classes from "./PortfolioLink.module.css";
import { useEffect, useRef, useState } from "react";

const PortfolioLink = ({ to, pname, marketValue }) => {

  const [charLimit, setCharLimit] = useState(100);
  const portfolioNameRef = useRef();

  useEffect(() => {
    setCharLimit(portfolioNameRef.current.offsetWidth*0.075);
  }, []);

  return (
    <li ref={portfolioNameRef}>
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
        {
          pname.length > charLimit
            ? <span title={pname}>{pname.slice(0,charLimit).trim() + "..."}</span>
            : <span>{pname}</span>
        }
        <span>{marketValue}</span>
      </NavLink>
    </li>
  );

}

export default PortfolioLink;