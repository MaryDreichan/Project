import React from "react";
import WordTable from "./WordTable";
import styles from "./home.module.scss";

function Home({ wordsData }) {
  return (
    <div className={styles.home}>
      <div className={styles.tableContainer}>
        <WordTable wordsData={wordsData} />
      </div>
    </div>
  );
}

export default Home;