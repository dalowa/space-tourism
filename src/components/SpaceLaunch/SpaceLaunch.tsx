import styles from "./SpaceLaunch.module.css";
import changeCurrent from "@/functions/changeCurrent";
import data from "@/data/data";
import { Technology } from "@/interfaces/Data";
import { useEffect } from "react";
import Image from "next/image";

export default function SpaceLaunch({
  name,
  images,
  description,
  seteador,
}: Technology) {
  return (
    <>
      <h3 className={styles.spaceLaunch101}>SPACE LAUNCH 101</h3>
      <section className={styles.mainContainer}>
        <div className={styles.imageLandscape}>
          <Image src={images.landscape} fill={true} alt={"Landscape"} />
        </div>
        <div className={styles.imagePortrait}>
          <Image src={images.portrait} fill={true} alt={"Portrait"} />
        </div>

        <div className={styles.secondContainer}>
          <ul>
            {data.technology.map((e, i) => (
              <li
                key={i}
                onClick={() =>
                  changeCurrent(
                    e.name,
                    data.technology.map((e) => e.name),
                    seteador
                  )
                }
                className={
                  e.name.toLocaleUpperCase() == name.toLocaleUpperCase()
                    ? `${styles.currentTech}`
                    : `${styles.noCurrenTech}`
                }
              >
                {i + 1}
              </li>
            ))}
          </ul>
          <div className={styles.thirdContainer}>
            <span>THE TERMINOLOGY...</span>
            <h1>{name}</h1>

            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
