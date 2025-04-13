import MostList from "./mostList";

const MostListContainer = ({data}) => {
  return (
    <>
      <MostList label={"Most viewed items"} items= {data.mvp} />
      <MostList label={"Most purchased items"} items= {data.mpp} />
    </>
  );
};

export default MostListContainer;
