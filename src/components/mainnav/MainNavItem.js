import { NavLink } from "react-router-dom";
import classes from "./MainNavItem.module.css"

const MainNavItem = ({ to, icon, iconActive }) => {
  return (
    <li className={classes["nav__item"]}>
      <NavLink to={to}>
        {
          ({isActive}) => {
            if (isActive) {
              return <img src={iconActive} alt="Portfolio" />;
            } else {
              return <img src={icon} alt="Portfolio" />;
            }
          }
        }
      </NavLink>
    </li>
  );
}

export default MainNavItem;