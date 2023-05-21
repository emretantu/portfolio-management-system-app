import classes from "./AssetsList.module.css"
import AssetLink from "./AssetLink";

const data = [
  {assetName: "Test 1", marketValue: "100", to:"/test3/test1"},
  {assetName: "Test 2", marketValue: "400", to:"/test3/test2"},
  {assetName: "Test 3", marketValue: "600", to:"/test3/test3"}
]

const AssetsList = () => {
  return (
    <ul className={classes["assets-list"]}>
      {
        data.map((d) => {
          return (
            <AssetLink
            assetName={d.assetName}
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

export default AssetsList;