import { YCrew } from "@/interfaces/YourCrew";
import styles from "./YourCrew.module.css";
import data from "@/data/data";
import Image from "next/image";
import changeCurrent from "@/functions/changeCurrent";

export default function YourCrew({
  namePerson,
  imagePerson,
  descriptionPerson,
  rolePerson,
  seteador,
}: YCrew) {
  return (
    <>
      <h2 className={styles.heading}>MEET YOUR CREW</h2>
      <div className={styles.Container1}>
        <div className={styles.imagePerson}>
          <Image alt={namePerson} src={imagePerson} fill={true} />
        </div>
        <div className={styles.Container2}>
          <article>
            <div
              className={styles.buttonLeft}
              onClick={() =>
                changeCurrent(
                  namePerson,
                  data.crew.map((e) => e.name),
                  seteador,
                  false,
                  false
                )
              }
            >
              <Image
                fill={true}
                src={`https://raw.githubusercontent.com/dalowa/space-tourism/main/src/assets/arrowLeft.svg`}
                alt="button-left"
              />
            </div>
            <ul>
              {data.crew.map((e) => (
                <li
                  key={e.name}
                  onClick={() =>
                    changeCurrent(
                      e.name,
                      data.crew.map((e) => e.name),
                      seteador
                    )
                  }
                  className={
                    namePerson == e.name
                      ? `${styles.liActual}`
                      : `${styles.liNoActual}`
                  }
                ></li>
              ))}
            </ul>
            <div
              className={styles.buttonRight}
              onClick={() =>
                changeCurrent(
                  namePerson,
                  data.crew.map((e) => e.name),
                  seteador,
                  false,
                  true
                )
              }
            >
              <Image
                fill={true}
                src={`https://raw.githubusercontent.com/dalowa/space-tourism/main/src/assets/arrowRight.svg`}
                alt="button-right"
              />
            </div>
          </article>
          <div className={styles.Container3}>
            <h1>{rolePerson.toLocaleUpperCase()}</h1>
            <h3>{namePerson.toLocaleUpperCase()}</h3>
            <p>{descriptionPerson}</p>
          </div>
        </div>
      </div>
    </>
  );
}
