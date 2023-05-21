import PieChart from "../charts/PieChart";
import classes from "./Portfolio.module.css";
import Assets from "./assets/Assets";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <aside className={classes.assets}>
        <Assets />
      </aside>

      <section className={classes.content}>
        <PieChart />
      </section>
    </div>
  );
}

export default Portfolio;