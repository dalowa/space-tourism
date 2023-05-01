import styles from "./NavBar.module.css";
import { Destination, Crew, Technology } from "../../interfaces/Data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavBarProps = {
  currentSection: string;
};

export default function NavBar({ currentSection }: NavBarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.Logo}>
        <Image
          src={
            "https://raw.githubusercontent.com/dalowa/space-tourism/f547d11a63f3481ad84481c08fce4b2e2b339e0e/src/assets/shared/logo.svg"
          }
          alt="logo"
          fill={true}
        />
      </div>

      <div
        className={
          isOpen ? `${styles.BurgerMenuOpen}` : `${styles.BurgerMenuClose}`
        }
        onClick={clickMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul
        className={
          isOpen
            ? `${styles.NavBar} ${styles.Open}`
            : `${styles.NavBar} ${styles.NoOpen}`
        }
      >
        <li
          className={currentSection == "HOME" ? `${styles.currentSection}` : ""}
        >
          <Link href={"/"}>HOME</Link>
        </li>
        <li
          className={
            currentSection == "DESTINATION" ? `${styles.currentSection}` : ""
          }
        >
          <Link href={"/destination"}>DESTINATION</Link>
        </li>
        <li
          className={currentSection == "CREW" ? `${styles.currentSection}` : ""}
        >
          <Link href={"/crew"}>CREW</Link>
        </li>
        <li
          className={
            currentSection == "TECHNOLOGY" ? `${styles.currentSection}` : ""
          }
        >
          <Link href={"/technology"}>TECHNOLOGY</Link>
        </li>
      </ul>
    </>
  );
}
