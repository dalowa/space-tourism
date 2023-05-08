import NavBar from "@/components/NavBar/NavBar";
import styles from "./technology.module.css";
import SpaceLaunch from "@/components/SpaceLaunch/SpaceLaunch";
import { useState } from "react";
import data from "@/data/data";

export default function Technology() {
  const [current, setCurrent] = useState<number>(0);
  return (
    <>
      <main className={styles.Technology}>
        <NavBar currentSection="TECHNOLOGY" />
        <SpaceLaunch
          name={data.technology[current].name}
          images={data.technology[current].images}
          description={data.technology[current].description}
          seteador={setCurrent}
        />
      </main>
    </>
  );
}
