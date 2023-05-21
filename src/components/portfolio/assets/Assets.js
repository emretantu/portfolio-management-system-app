import classes from "./Assets.module.css";
import AssetsList from "./AssetsList";

const Assets = () => {
  return (
    <div className={classes.assets}>
      <section className={classes.head}>
        <AssetsList />
      </section>
      <section className={classes.list}>

      </section>
    </div>
  );
}

export default Assets;