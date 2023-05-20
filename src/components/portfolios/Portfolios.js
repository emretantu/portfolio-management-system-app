import PortfolioLink from "./PortfolioLink";
import "./Portfolios.css"

const Portfolios = () => {
  return (
    <ul className="portfolios">
      <PortfolioLink to="test">
        Test
      </PortfolioLink>
      <PortfolioLink to="test2">
        Test 2
      </PortfolioLink>
    </ul>
  );
}

export default Portfolios;