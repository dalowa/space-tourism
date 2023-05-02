import NavBar from "@/components/NavBar/NavBar";
import styles from "./crew.module.css";
import data from "@/data/data";
import { useState } from "react";
import YourCrew from "@/components/YourCrew/YourCrew";

export default function Crew() {
  let [currentPerson, setCurrentPerson] = useState(0);

  return (
    <>
      <section className={styles.Crew}>
        <NavBar currentSection="CREW" />
        <YourCrew
          imagePerson={data.crew[currentPerson].images.png}
          rolePerson={data.crew[currentPerson].role}
          namePerson={data.crew[currentPerson].name}
          descriptionPerson={data.crew[currentPerson].bio}
          seteador={setCurrentPerson}
        />
      </section>
    </>
  );
}
