import { ReactElement } from "react";
import basketCardImage from "../../../../../assets/BasketCard.jpg";
import styles from "./BasketCard.module.css";

function BasketCard(): ReactElement {
    return (
        <li className={styles.item}>
            <img src={basketCardImage} alt="Изображение товара" />
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Костюм Advolatum - соцветие</h3>
                <div className={styles.inner}>
                    <p className={styles.text}>Размер: M</p>
                    <p className={styles.text}>кол-во: - 1 +</p>
                    <p className={styles.text}>стоимость: 3751 ₽</p>
                </div>
            </div>
        </li>
    )
};

export default BasketCard;