import classes from "./Assets.module.css";
import AssetsList from "./AssetsList";

const Assets = () => {
  return (
    <div className={classes.assets}>
      <section className={classes.head}>
        
      </section>
      <section className={classes.list}>
        <AssetsList />
      </section>
    </div>
  );
}

export default Assets;