import { NavLink } from "react-router-dom";
import classes from "./AssetLink.module.css";
import { useEffect, useRef, useState } from "react";

const AssetLink = ({ assetName, marketValue, to }) => {

  const [charLimit, setCharLimit] = useState(100);
  const assetNameRef = useRef();

  useEffect(() => {
    setCharLimit(assetNameRef.current.offsetWidth*0.075);
  }, []);

  return (
    <li ref={assetNameRef}>
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
        {
          assetName.length > charLimit
            ? <span title={assetName}>{assetName.slice(0,charLimit).trim() + "..."}</span>
            : <span>{assetName}</span>
        }
        <span>{marketValue}</span>
      </NavLink>
    </li>
  );
}

export default AssetLink; 