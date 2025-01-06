import { ReactElement } from "react";
import styles from "./MenuNavigation.module.css";

function MenuNavigation(): ReactElement {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li>
                    <a href="#" className={styles.link}>
                        Главная
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        Коллекции
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        О нас
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        Контакты
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.link}>
                        Корзина
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default MenuNavigation;