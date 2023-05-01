import NavBar from "@/components/NavBar/NavBar";
import styles from "./destination.module.css";
import PickDestination from "@/components/PickDestination/PickDestination";
import data from "@/data/data";
import { useState } from "react";
import { PlanetNames } from "@/interfaces/PickDestination";

export default function Destination() {
  let [destination, setDestination] = useState(data.destinations);
  let [currentPlanet, setCurrentPlanet] = useState(0);

  const changePlanet = (name: string) => {
    switch (name) {
      case "Moon":
        setCurrentPlanet(0);
        break;
      case "Mars":
        setCurrentPlanet(1);
        break;
      case "Europa":
        setCurrentPlanet(2);
        break;
      case "Titan":
        setCurrentPlanet(3);
        break;
      default:
        alert(`El caso de ${name} no existe`);
    }
  };

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
          changePlanet={changePlanet}
        />
      </section>
    </>
  );
}
