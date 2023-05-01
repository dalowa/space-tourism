import styles from "./NavBar.module.css";
import { Destination, Crew, Technology } from "../../interfaces/Data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Image
        src={
          "https://raw.githubusercontent.com/dalowa/space-tourism/f547d11a63f3481ad84481c08fce4b2e2b339e0e/src/assets/shared/logo.svg"
        }
        alt="logo"
        width={50}
        height={50}
        className={styles.Logo}
      />
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
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/destination"}>DESTINATION</Link>
        </li>
        <li>
          <Link href={"/crew"}>CREW</Link>
        </li>
        <li>
          <Link href={"/technology"}>TECHNOLOGY</Link>
        </li>
      </ul>
    </>
  );
}
