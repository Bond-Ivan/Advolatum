import { ReactElement } from "react";
import styles from "./ActualCard.module.css";

type Card = {
    image: string,
    title: string,
    price: string,
}

function ActualCard({ image, title, price }: Card): ReactElement {
    return (
        <li className={styles.item}> 
            <img src={image} alt="Товар" className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.box}>
                <span className={styles.price}>{price} ₽</span>
                <button className={styles.button}>В корзину</button>
            </div>
        </li>
    )
}

export default ActualCard;