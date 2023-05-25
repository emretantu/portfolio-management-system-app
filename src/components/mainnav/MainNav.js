import MainNavItem from "./MainNavItem";

import pieIcon from "../../images/icons/pms-icons_pie.svg";
import pieIconActive from "../../images/icons/pms-icons_pie-active.svg"
import performanceIcon from "../../images/icons/pms-icons_performance.svg";
import performanceIconActive from "../../images/icons/pms-icons_performance-active.svg";
import settingsIcon from "../../images/icons/pms-icons_settings.svg";
import settingsIconActive from "../../images/icons/pms-icons_settings-active.svg";

const MainNav = () => {
  return (
    <nav>
      <ul>
        <MainNavItem
          to={"/portfolios"}
          icon={pieIcon}
          iconActive={pieIconActive}
        />
      </ul>
    </nav>
  );
}

export default MainNav;