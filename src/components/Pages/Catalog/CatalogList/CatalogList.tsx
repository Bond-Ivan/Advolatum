import { ReactElement } from "react";
import catalogCards from "../../../../mocks/catalogCards";
import styles from "./CatalogList.module.css";
import ProductCard from "../../../ProductCard/ProductCard";

function CatalogList(): ReactElement {
    return (
        <ul className={styles.list}>
            {catalogCards.map(({ image, title, price }, index) => {
                return (
                    <ProductCard key={index} image={image} title={title} price={price} type={"catalogCard"}/>
                )
            })}
        </ul>
    )
}

export default CatalogList;