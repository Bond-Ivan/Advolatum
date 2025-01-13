import { ReactElement, useState } from "react";
import styles from "./BasketList.module.css";
import BasketCard from "./BasketCard/BasketCard";
import CardBasket from "../../../../shared/types/basketCard";
import deleteCard from "../../../../shared/utils/deleteCard";

function BasketList(): ReactElement {
    const basketList = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')!) : [];
    const [basket, setBasket] = useState<CardBasket[]>(basketList);

    const handleDelete = (title: string) => {
        deleteCard(title);
        setBasket(basket.filter((item) => item.title !== title));
    }

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {basket.map(({ image, title, price, count }: CardBasket, index: number) => {
                    return (
                        <BasketCard key={index} image={image} title={title} price={price} count={count} handleDelete={handleDelete} />
                    )
                })}
            </ul>
        </div>
    )
}

export default BasketList;