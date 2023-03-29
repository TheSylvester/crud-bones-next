import React from "react";
import styles from "crud-next/styles/DataList.module.css";

interface DataListProps<T> {
  items: T[];
  resourceName: string;
  ItemComponent: React.FC<T>;
}

const DataList: React.FC<DataListProps<any>> = ({
                                                  items,
                                                  resourceName,
                                                  ItemComponent
                                                }) => {

  const [editIndex, setEditIndex] = React.useState<number | null>(null);

  const DisplayLine = (i: number, item: any) =>
    <React.Fragment key={i}>
      <ItemComponent {...{ [resourceName]: item }} />
      <div>
        <button
          onClick={() => setEditIndex(i)}
          className={`${styles.dataList} ${styles.primary}`}>Update
        </button>
        <button
          className={`${styles.dataList} ${styles.secondary}`}>Delete
        </button>
      </div>
    </React.Fragment>;

  const EditLine = (i: number, item: any) => {
    const keys = Object.keys(item).filter(key => key !== "_id");
    const types = {
      string: "text",
      number: "number",
      boolean: "checkbox",
      Array: "text"
    };
    return (
      <React.Fragment key={i}>
        {keys.map(key => {
            const keyType = typeof item[key];

            const singleInput = () => <div key={key}>
              <input type={types[typeof item[key]]} name={key}
                     placeholder={item[key]} />
            </div>;

            const multiInput = () => <div key={key}>
              {
                item[key].map((arrayItem: any, arrayIndex: number) =>
                  <input type={types[typeof arrayItem[key]]}
                         name={key + arrayIndex}
                         placeholder={arrayItem} />)
              }
            </div>;

            console.log(keyType);

            return keyType !== "object" ? singleInput() : multiInput();
          }
        )}
        <div>
          <button onClick={() => setEditIndex(null)}
                  className={`${styles.dataList} ${styles.primary}`}>Save
          </button>
          <button
            onClick={() => setEditIndex(null)}
            className={`${styles.dataList} ${styles.secondary}`}>Cancel
          </button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className={styles.dataList}>
      {/* header row, just names of keys */}
      {Object.keys(items[0]).map((key: string) => key === "_id" ? null :
        <div
          key={key}>{key}</div>)}
      <div>Actions</div>
      {/* items list */}
      {items.map((item, i) => {
        return editIndex === i ?
          EditLine(i, item) :
          DisplayLine(i, item);
      })}
    </div>
  );
};

export default DataList;