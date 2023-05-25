import { Link } from "react-router-dom";

const MainNavItems = ({ to, icon }) => {
  return (
    <li>
      <Link to={to}>
        <img src={icon} alt="Portfolio" />
      </Link>
    </li>
  );
}

export default MainNavItems;