import NavBar from "@/components/NavBar/NavBar";
import styles from "./destination.module.css";
import PickDestination from "@/components/PickDestination/PickDestination";
import data from "@/data/data";
import { useState } from "react";

export default function Destination() {
  let [currentPlanet, setCurrentPlanet] = useState(0);

  return (
    <>
      <section className={styles.Destination}>
        <NavBar currentSection={"DESTINATION"} />
        <PickDestination
          planetImage={data.destinations[currentPlanet].images.png}
          planetInfo={data.destinations[currentPlanet].description}
          planetName={data.destinations[currentPlanet].name.toLocaleUpperCase()}
          avgDistance={data.destinations[
            currentPlanet
          ].distance.toLocaleUpperCase()}
          travelTime={data.destinations[
            currentPlanet
          ].travel.toLocaleUpperCase()}
          seteador={setCurrentPlanet}
        />
      </section>
    </>
  );
}
