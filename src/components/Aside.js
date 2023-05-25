import classes from "./Aside.module.css";
import PortfoliosList from "./portfolios/PortfoliosList";
import Brand from "./brand/Brand";
import MainNav from "./mainnav/MainNav";

const Aside = () => {
  return (
    <aside className={classes.aside}>
      <section className={classes.brand}>
        <Brand />
      </section>

      <section className={classes["portfolios-list"]}>
        <PortfoliosList />  
      </section>

      <section className={classes.nav}>
        <MainNav />
      </section>
    </aside>
  );
}

export default Aside;