import { ReactElement } from "react";
import styles from "./Catalogmenu.module.css";

function CatalogMenu(): ReactElement {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <button type="button" className={styles.button}>
                    Плащи
                </button>
            </li>
            <li className={styles.item}>
                <button type="button" className={styles.button}>
                    Футболки
                </button>
            </li>
            <li className={styles.item}>
                <button type="button" className={styles.button}>
                    Кофты
                </button>
            </li>
            <li className={styles.item}>
                <button type="button" className={styles.button}>
                    Комбинезоны
                </button>
            </li>
            <li className={styles.item}>
                <button type="button" className={styles.button}>
                    Кепки
                </button>
            </li>
            <li className={styles.item}> 
                <button type="button" className={styles.button}>
                    Сумки
                </button>
            </li>
        </ul>
    )
}

export default CatalogMenu;