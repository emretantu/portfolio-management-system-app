import classes from "./Aside.module.css";
import Portfolios from "./portfolios/Portfolios";
import Brand from "./brand/Brand";

const Aside = () => {
  return (
    <>
      <aside>
        <section className={classes.brand}>
          <Brand />
        </section>

        <section className={classes["portfolios-list"]}>
          <Portfolios />  
        </section>

        <section className={classes.nav}>
          
        </section>
      </aside>
    </>
  );
}

export default Aside;