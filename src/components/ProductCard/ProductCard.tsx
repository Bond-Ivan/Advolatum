import { ReactElement } from "react";
import styles from "./ProductCard.module.css";
import Card from "../../shared/types/card";
import addCard from "../../shared/utils/addCard";

function ProductCard({ image, title, price, type }: Card): ReactElement {
    return (
        <li className={type !== "catalogCard" ? styles.actualItem : styles.catalogItem}>
            <img src={image} alt="Товар" className={styles.image} />
            <h3 className={type !== "catalogCard" ? styles.actualTitle : styles.catalogTitle}>{title}</h3>
            <div className={styles.box}>
                <span className={type !== "catalogCard" ? styles.actualPrice : styles.catalogPrice}>{price} ₽</span>
                <button className={type !== "catalogCard" ? styles.actualButton : styles.catalogButton} onClick={() => {
                    addCard({ image, title, price })
                }}>В корзину</button>
            </div>
        </li>
    )
}

export default ProductCard;