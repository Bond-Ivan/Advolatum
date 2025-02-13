import { ReactElement, useState } from "react";
import styles from "./Actual.module.css";
import ProductCard from "../../../ProductCard/ProductCard";
import catalogCards from "../../../../mocks/catalogCards";

function Actual(): ReactElement {
    const [cardsCount, setCardsCount] = useState<number>(4);

    const loadMoreCards = () => {
        setCardsCount(prevCards => prevCards + 4);
    };

    return (
        <section className={styles.actual}>
            <div className={styles.container}>
                <h2 className={styles.title}>Актуальное</h2>
                <ul className={styles.list}>
                    {catalogCards.slice(0, cardsCount).map(({ image, title, price }, index) => {
                        return (
                            <ProductCard key={index} image={image} title={title} price={price} type={"actualCard"} />
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

export default Actual;