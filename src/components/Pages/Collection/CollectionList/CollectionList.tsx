import { ReactElement, useState } from "react";
import styles from "./CollectionList.module.css";
import ProductCard from "../../../ProductCard/ProductCard";
import catalogCards from "../../../../mocks/catalogCards";

function CollectionList(): ReactElement {
    const [cardsCount, setCardsCount] = useState<number>(4);

    const loadMoreCards = () => {
        setCardsCount(prevCards => prevCards + 4);
    };

    return (
        <section className={styles.actual}>
            <div className={styles.container}>
                <h2 className={styles.title}>Товары коллекции</h2>
                <ul className={styles.list}>
                    {catalogCards.slice(0, cardsCount).map(({ id, image, title, price }, index: number) => {
                        return (
                            <ProductCard key={index} id={id} image={image} title={title} price={price} />
                        )
                    })}
                </ul>
                {cardsCount < 8 && (
                    <button className={styles.button} onClick={loadMoreCards}>Смотреть больше</button>
                )}
            </div>
        </section>
    )
}

export default CollectionList;