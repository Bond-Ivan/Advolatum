import { ReactElement } from "react";
import BasketForm from "./BasketForm/BasketForm";
import styles from "./Basket.module.css";
import BasketList from "./BasketList/BasketList";

function Basket(): ReactElement {
    return (
        <main>
            <section className={styles.basket}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <BasketList />
                        <BasketForm />
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Basket;