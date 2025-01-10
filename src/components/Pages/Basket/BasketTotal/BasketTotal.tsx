import { ReactElement } from "react";
import styles from "./BasketTotal.module.css";

function BasketTotal(): ReactElement {
    return (
        <div className={styles.wrapper}>
            <p className={styles.description}>
                СУММА доставкИ будет расчитана после ввода
                данных о месте назначения - город, улица
            </p>
            <p className={styles.text}>доставка: 500₽</p>
            <p className={styles.text}>Итого: 4251₽</p>
        </div>
    )
};

export default BasketTotal;