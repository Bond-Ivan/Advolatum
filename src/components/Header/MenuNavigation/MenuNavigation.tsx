import { ReactElement, useEffect, useState } from "react";
import styles from "./MenuNavigation.module.css";
import { Link } from "react-router-dom";

function MenuNavigation(): ReactElement {
    const [totalItems, setTotalItems] = useState<number>(0);

    const updateTotalItems = () => {
        const basketList = JSON.parse(localStorage.getItem('basket') || '[]');
        const count = basketList.reduce((acc: number, item: { count: number }) => acc + item.count, 0);
        setTotalItems(count);
    };

    useEffect(() => {
        updateTotalItems();
        
        const handleStorageChange = () => {
            updateTotalItems();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

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
                <li className={styles.item}>
                    <Link to="/basket" className={styles.link}>
                        Корзина
                    </Link>

                    {totalItems !== 0 && (
                        <span className={styles.count}>
                            {totalItems}
                        </span>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default MenuNavigation;