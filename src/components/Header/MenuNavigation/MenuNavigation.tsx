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
                    <Link to="/aboutUs" className={styles.link}>
                        О нас
                    </Link>
                </li>
                <li>
                    <Link to="/contacts" className={styles.link}>
                        Контакты
                    </Link>
                </li>
                <li>
                    <Link to="/basket" className={styles.link}>
                        Корзина
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuNavigation;