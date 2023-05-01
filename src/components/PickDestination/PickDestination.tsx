import { PickYDestination } from "@/interfaces/PickDestination";
import { useState } from "react";
import data from "@/data/data";
import Image from "next/image";
import styles from "./PickDestination.module.css";

export default function PickDestination({
  planetImage,
  planetName,
  planetInfo,
  avgDistance,
  travelTime,
  changePlanet,
}: PickYDestination) {
  return (
    <>
      <div className={styles.Container1}>
        <h2>PICK YOUR DESTINATION</h2>
        <div className={styles.planetImage}>
          <Image src={planetImage} alt={planetName} fill={true} />
        </div>
      </div>
      <div className={styles.Container2}>
        <ul>
          {data.destinations.map((e) => (
            <li
              key={e.name}
              onClick={() => changePlanet(e.name)}
              className={
                e.name.toLocaleUpperCase() == planetName
                  ? `${styles.currentPlanet}`
                  : ""
              }
            >
              {e.name.toLocaleUpperCase()}
            </li>
          ))}
        </ul>
        <h1>{planetName}</h1>
        <p className={styles.PlanetInfo}>{planetInfo}</p>
        <hr></hr>
        <div className={styles.Container3}>
          <span>
            <h4>AVG. DISTANCE</h4>
            <p>{avgDistance}</p>
          </span>
          <span>
            <h4>EST. TRAVEL TIME</h4>
            <p>{travelTime}</p>
          </span>
        </div>
      </div>
    </>
  );
}
