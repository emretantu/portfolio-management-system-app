import classes from "./AssetsList.module.css"
import AssetLink from "./AssetLink";

const data = [
  {assetName: "TRY uzun deneme deneme deneme lorem ipsum", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
  {assetName: "TRY", marketValue: "100", to:"/test3/test1"},
  {assetName: "EREGL", marketValue: "400", to:"/test3/test2"},
  {assetName: "ASELS", marketValue: "600", to:"/test3/test3"}, 
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