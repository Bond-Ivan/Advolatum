import { ReactElement } from "react";
import styles from "./Contacts.module.css";
import Socials from "../Socials/Socials";

function Contacts(): ReactElement {
    return (
        <section className={styles.contacts}>
            <div className={styles.container}>
                <h2 className={styles.title}>мы всегда на связи</h2>
                <div className={styles.wrapper}>
                    <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb908b99538487b1e9b75e521b33447acdd5172ec962cbfb6bc1c2938b0079c6&amp;source=constructor&theme=dark"></iframe>
                    <div className={styles.box}>
                        <a className={styles.link} href="#">8(000)000-00-00</a>
                        <a className={styles.link} href="#">info@advolatum.ru</a>
                        <div className={styles.socials}>
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;