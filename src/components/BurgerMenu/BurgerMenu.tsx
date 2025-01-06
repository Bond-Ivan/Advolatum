import { ReactElement } from "react";
import styles from "./BurgerMenu.module.css";

function BurgerMenu(): ReactElement {
    return (
        <button className={styles.burger}>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </button>
    )
}

export default BurgerMenu;