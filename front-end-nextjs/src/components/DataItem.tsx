import { IData } from "../types/IData";

const DataItem = ({ data }: { data: IData }) => {

  const { text, number, boolean, stringsArray } = data;

  return (
    <>
      <div>{text}</div>
      <div>{number}</div>
      <div>{boolean ? "true" : "false"}</div>
      <div>
        <ul>{stringsArray.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </>
  );
};

export default DataItem;