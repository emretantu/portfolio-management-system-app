import { NavLink } from "react-router-dom";
import classes from "./AssetLink.module.css";

const AssetLink = ({ assetName, marketValue, to }) => {
  return (
    <li>
      <NavLink to={to} className={classes["assets-list__link"]}>
        <span>{assetName}</span>
        <span>{marketValue}</span>
      </NavLink>
    </li>
  );
}

export default AssetLink; 