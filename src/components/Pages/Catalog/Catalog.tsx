import { ReactElement } from "react";
import styles from "./Catalog.module.css";
import CatalogMenu from "./CatalogMenu/CatalogMenu";
import CatalogColors from "./CatalogColors/CatalogColors";
import CatalogList from "./CatalogList/CatalogList";
import Contacts from "../../Contacts/Contacts";
import logo from "../../../assets/logo.svg";

function Catalog(): ReactElement {
    return (
        <main>
            <section>
                <div className={styles.container}>
                    <img width={116} height={36} src={logo} alt="Логотип" className={styles.image}/>
                    <div className={styles.wrapper}>
                        <div>
                            <CatalogMenu />
                            <CatalogColors />
                        </div>
                        <CatalogList />
                    </div>
                </div>
            </section>
            <Contacts />
        </main>
    )
}

export default Catalog;