import Head from "next/head";

import styles from "crud-next/styles/Home.module.css";
import DataList from "crud-next/components/DataList";
import DataItem from "crud-next/components/DataItem";
import { IData } from "crud-next/types/IData";

export default function Home() {

  const data: IData[] = [
    {
      _id: "item0",
      text: "Item 0",
      number: 0,
      boolean: true,
      stringsArray: ["string0a", "string0b", "string0c"]
    },
    {
      _id: "item1",
      text: "Item 1",
      number: 1,
      boolean: false,
      stringsArray: ["string1a", "string1b", "string1c"]
    },
    {
      _id: "item2",
      text: "Item 2",
      number: 2,
      boolean: true,
      stringsArray: ["string2a", "string2b", "string2c"]
    },
    {
      _id: "item3",
      text: "Item 3",
      number: 3,
      boolean: false,
      stringsArray: ["string3a", "string3b", "string3c"]
    },
    {
      _id: "item4",
      text: "Item 4",
      number: 4,
      boolean: true,
      stringsArray: ["string4a", "string4b", "string4c"]
    }
  ];

  return (
    <>
      <Head>
        <title>crud-bones-next</title>
        <meta name="description"
              content="crud-bones-next front-end react UI demonstrating basic CRUD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>Read Data</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Create</button>
        </div>
        <DataList
          items={data}
          resourceName={"data"}
          ItemComponent={DataItem} />

      </main>
    </>
  );
}
