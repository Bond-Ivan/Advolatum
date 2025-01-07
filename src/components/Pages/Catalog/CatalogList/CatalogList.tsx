import { ReactElement } from "react";
import catalogCards from "../../../../mocks/catalogCards";
import CatalogCard from "./CatalogCard/CatalogCard";
import styles from "./CatalogList.module.css";

function CatalogList(): ReactElement {
    return (
        <ul className={styles.list}>
            {catalogCards.map(({ image, title, price }, index) => {
                return (
                    <CatalogCard key={index} image={image} title={title} price={price} />
                )
            })}
        </ul>
    )
}

export default CatalogList;