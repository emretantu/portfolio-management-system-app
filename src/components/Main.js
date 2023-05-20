import { useState } from "react";
import classes from "./Main.module.css";

const Main = () => {

  const [title, setTitle] = useState("Test");

  return (
    <main>
      <header className={classes.title}>
        <h1>{title}</h1>
      </header>
      <section className={classes["content-container"]}>
        Test Section
      </section>
    </main>
  );
}

export default Main;