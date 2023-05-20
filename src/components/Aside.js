import classes from "./Aside.module.css";

const Aside = ({ children }) => {
  return (
    <>
      <aside>
        {children}
      </aside>
    </>
  );
}

export default Aside;