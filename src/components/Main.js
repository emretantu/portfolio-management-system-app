import classes from "./Main.module.css";
import Portfolio from "./portfolio/Portfolio";

const Main = () => {



  return (
    <main className={classes.main}>
      <header className={classes.title}>
        <h1>Hisse Senedi</h1>
      </header>
      <section className={classes["content-container"]}>
        <Portfolio />
      </section>
    </main>
  );
}

export default Main;