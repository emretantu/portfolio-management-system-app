import PortfolioLink from "./PortfolioLink";
import classes from "./PortfoliosList.module.css";

const data = [
  {pname: "Ana Portföy", marketValue: "100", to:"/test1"},
  {pname: "Fonlar", marketValue: "400", to:"/test2"},
  {pname: "Hisse Senedi", marketValue: "1100", to:"/test3"}
]

const PortfoliosList = () => {
  return (
    
    <ul className={classes.portfolios}>
      {
        data.map((d) => {
          return (
            <PortfolioLink
            pname={d.pname}
            marketValue={d.marketValue}
            to={d.to}
            key={d.to}
          />
          );
        })
      }
    </ul>
  );
}

export default PortfoliosList;