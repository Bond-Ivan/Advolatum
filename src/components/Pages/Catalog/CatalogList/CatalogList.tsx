import { ReactElement, useState } from "react";
import catalogCards from "../../../../mocks/catalogCards";
import styles from "./CatalogList.module.css";
import ProductCard from "../../../ProductCard/ProductCard";

function CatalogList(): ReactElement {
    const [cardsCount, setCardsCount] = useState<number>(8);

    const loadMoreCards = () => {
        setCardsCount(prevCards => prevCards + 4);
    };

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {catalogCards.slice(0, cardsCount).map(({ id, image, title, price }, index: number) => {
                    return (
                        <ProductCard key={index} id={id} image={image} title={title} price={price} type={"catalogCard"} />
                    )
                })}
            </ul>
            {
                cardsCount < catalogCards.length && (
                    <button className={styles.button} onClick={loadMoreCards}>Смотреть больше</button>
                )
            }
        </div>
    )
}

export default CatalogList;