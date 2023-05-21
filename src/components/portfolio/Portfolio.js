import classes from "./Portfolio.module.css";
import Assets from "./assets/Assets";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <aside className={classes.assets}>
        <Assets />
      </aside>

      <section className={classes.content}>
        
      </section>
    </div>
  );
}

export default Portfolio;