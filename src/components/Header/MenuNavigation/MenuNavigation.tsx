import { ReactElement } from "react";
import styles from "./MenuNavigation.module.css";
import { Link } from "react-router-dom";

function MenuNavigation(): ReactElement {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li>
                    <Link to="/" className={styles.link}>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link to="/collection" className={styles.link}>
                        Коллекции
                    </Link>
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