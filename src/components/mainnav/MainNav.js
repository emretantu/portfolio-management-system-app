import MainNavItem from "./MainNavItem";
import classes from "./MainNav.module.css";

import pieIcon from "../../images/icons/pms-icons_pie.svg";
import pieIconActive from "../../images/icons/pms-icons_pie-active.svg"
import user from "../../images/icons/pms-icons_user.svg";
import userActive from "../../images/icons/pms-icons_user-active.svg";
import settingsIcon from "../../images/icons/pms-icons_settings.svg";
import settingsIconActive from "../../images/icons/pms-icons_settings-active.svg";

const MainNav = () => {
  return (
    <nav className={classes["nav"]}>
      <ul className={classes["nav__list"]}>
        <MainNavItem
          to={"/portfolios"}
          icon={pieIcon}
          iconActive={pieIconActive}
          key={"/portfolios"}
        />
        <MainNavItem
          to={"/user"}
          icon={user}
          iconActive={userActive}
          key={"/user"}
        />
        <MainNavItem
          to={"/settings"}
          icon={settingsIcon}
          iconActive={settingsIconActive}
          key={"/settings"}
        />
      </ul>
    </nav>
  );
}

export default MainNav;