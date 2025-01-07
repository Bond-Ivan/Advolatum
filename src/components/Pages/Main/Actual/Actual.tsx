import { ReactElement } from "react";
import styles from "./Actual.module.css";
import actualCards from "../../../../mocks/actualCards";
import ActualCard from "./ActualCard/ActualCard";

function Actual(): ReactElement {
    return (
        <section className={styles.actual}>
            <div className={styles.container}>
                <h2 className={styles.title}>Актуальное</h2>
                <ul className={styles.list}>
                    {actualCards.map(({ image, title, price }, index) => {
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

export default Actual;