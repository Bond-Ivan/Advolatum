import { ReactElement } from "react";
import styles from "./CollectionList.module.css";
import collectionCards from "../../../../mocks/collectionCards";
import ActualCard from "../../Main/Actual/ActualCard/ActualCard";

function CollectionList(): ReactElement {
    return (
        <section className={styles.actual}>
            <div className={styles.container}>
                <h2 className={styles.title}>Товары коллекции</h2>
                <ul className={styles.list}>
                    {collectionCards.map(({ image, title, price }, index) => {
                        return (
                            <ActualCard key={index} image={image} title={title} price={price} />
                        )
                    })}
                </ul>
                <button className={styles.button}>Смотреть больше</button>
            </div>
        </section>
    )
}

export default CollectionList;