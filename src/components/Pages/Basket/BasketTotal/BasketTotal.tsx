import { ReactElement } from "react";
import styles from "./BasketTotal.module.css";

interface BasketItem {
    price: number;
    count: number;
};

function BasketTotal(): ReactElement {
    const basketList = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')!) : [];
    const totalPrice = basketList.reduce((acc: number, item: BasketItem) => {
        return acc + item.price * item.count;
    }, 0);

    return (
        <div className={styles.wrapper}>
            <p className={styles.description}>
                СУММА доставкИ будет расчитана после ввода
                данных о месте назначения - город, улица
            </p>
            <p className={styles.text}>доставка: 500₽</p>
            <p className={styles.text}>Итого: {totalPrice + 500}</p>
        </div>
    )
};

export default BasketTotal;