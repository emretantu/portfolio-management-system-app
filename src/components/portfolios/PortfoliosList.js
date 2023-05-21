import PortfolioLink from "./PortfolioLink";
import "./PortfoliosList.css";

const data = [
  {pname: "Test 1", marketValue: "100", to:"/test1"},
  {pname: "Test 2", marketValue: "400", to:"/test2"},
  {pname: "Test 3", marketValue: "1100", to:"/test3"}
]

const PortfoliosList = () => {
  return (
    
    <ul className="portfolios">
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