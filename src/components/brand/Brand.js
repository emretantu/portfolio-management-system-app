import { Link } from "react-router-dom";
import classes from "./Brand.module.css";

const Brand = () => {
  return (
    <Link to="/" className={classes["brand__link"]}>PMSystem</Link>
  );
}

export default Brand;