import { ReactElement } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import Socials from "../Socials/Socials";
import { Link } from "react-router-dom";

function Footer(): ReactElement {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.inner}>
                        <Link to="/documentation" className={`${styles.text} ${styles.link}`}>политика конфиденциальности</Link>
                        <Link to="/documentation" className={`${styles.text} ${styles.link}`}>согласие на обработку персональных данных</Link>
                    </div>
                    <div className={styles.inner2}>
                        <img src={logo} alt="Логотип" width={195} height={45} className={styles.image} />
                        <div className={styles.box}>
                            <p className={styles.text}>2022</p>
                            <p className={styles.text}>GruboGovorya</p>
                        </div>
                    </div>
                    <Socials />
                </div>
            </div>
        </footer>
    )
}

export default Footer;