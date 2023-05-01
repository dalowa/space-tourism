import { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/data/data";
import { Data } from "@/interfaces/Data";
import styles from "./../styles/Home.module.css";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  let [test, setTest] = useState<Data>();
  useEffect(() => {
    setTest(data);
    console.log(test);
  }, [test]);
  return (
    <>
      <div className={styles.Home}>
        <NavBar />
        <div className={styles.Container}>
          <h2 className={styles.Heading2}>SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className={styles.Heading1}>SPACE</h1>
          <p className={styles.paragraph}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className={styles.Button}>EXPLORE</button>
      </div>
    </>
  );
}
