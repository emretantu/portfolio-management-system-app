import { NavLink } from "react-router-dom";

const MainNavItem = ({ to, icon, iconActive }) => {
  return (
    <li>
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