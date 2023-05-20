import classes from "./Aside.module.css";
import { Link } from "react-router-dom"

const Aside = () => {
  return (
    <>
      <aside>
        <section className={classes.brand}>
          <Link to="/" className={classes["brand__link"]}>PMSystem</Link>
        </section>

        <section className={classes["portfolios-list"]}>
          
        </section>

        <section className={classes.nav}>
          
        </section>
      </aside>
    </>
  );
}

export default Aside;