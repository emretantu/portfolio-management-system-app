import { NavLink } from "react-router-dom";
import classes from "./AssetLink.module.css";

const AssetLink = ({ assetName, marketValue, to }) => {


  return (
    <li>
      <NavLink
        to={to}
        className={classes["assets-list__link"]}
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
        <span>{assetName}</span>
        <span>{marketValue}</span>
      </NavLink>
    </li>
  );
}

export default AssetLink; 