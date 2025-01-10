import { ReactElement } from "react";
import styles from "./BasketList.module.css";
import BasketCard from "./BasketCard/BasketCard";

function BasketList(): ReactElement {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
            </ul>
        </div>
    )
}

export default BasketList;