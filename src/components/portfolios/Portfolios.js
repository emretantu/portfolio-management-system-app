import PortfolioLink from "./PortfolioLink";
import "./Portfolios.css"

const Portfolios = () => {
  return (
    <ul className="portfolios">
      <PortfolioLink
        pname="Test"
        marketValue="50"
        to="/test"
      />
      <PortfolioLink
        pname="Test 2"
        marketValue="50"
        to="/test2"
      />
      <PortfolioLink
        pname="Test 3"
        marketValue="50"
        to="/test3"
      />
    </ul>
  );
}

export default Portfolios;