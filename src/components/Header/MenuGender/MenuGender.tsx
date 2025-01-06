import { ReactElement } from "react";
import styles from "./MenuGender.module.css";

function Menugender(): ReactElement {
    return (
        <ul className={styles.list}>
            <li>
                <a href="#" className={styles.link}>
                    Девушкам
                </a>
            </li>
            <li>
                <a href="#" className={styles.link}>
                    Мужчинам
                </a>
            </li>
            <li>
                <a href="#" className={styles.link}>
                    Унисекс
                </a>
            </li>
        </ul>
    )
}

export default Menugender;