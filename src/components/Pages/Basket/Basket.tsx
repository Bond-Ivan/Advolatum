import { ReactElement, useEffect, useState } from "react";
import BasketForm from "./BasketForm/BasketForm";
import styles from "./Basket.module.css";
import BasketList from "./BasketList/BasketList";
import BasketTotal from "./BasketTotal/BasketTotal";

function Basket(): ReactElement {
    const basketList = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')!) : [];
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(basketList)
    }, [])

    return (
        <main>
            <section className={styles.basket}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        {items.length !== 0 &&
                            <div className={styles.inner}>
                                <BasketList />
                                <BasketTotal />
                                <div>
                                    <label className={styles.customCheckbox}>
                                        <input type="checkbox" />
                                        <span className={styles.checkbox}></span>
                                        <span className={styles.labelText}>
                                            Согласие на обработку персональных данных
                                        </span>
                                    </label>
                                </div>
                            </div>
                        }
                        <BasketForm />
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Basket;