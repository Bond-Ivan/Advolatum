import { ReactElement } from "react";
import Contacts from "../../Contacts/Contacts";
import styles from "./AboutUs.module.css";
import firstImage from "../../../assets/aboutUs-image1.jpg";
import secondImage from "../../../assets/aboutUs-image2.jpg";
import thirdImage from "../../../assets/aboutUs-image3.jpg";

function AboutUs(): ReactElement {
    return (
        <main>
            <section>
                <div className={styles.container}>
                    <h2 className={styles.title}>О нас</h2>
                    <p className={styles.description}>
                        Разнообразный и богатый опыт укрепление и развитие структуры в
                        значительной степени обуславливает создание соответствующий условий
                        активизации. С другой стороны начало повседневной работы по формированию
                        позиции позволяет выполнять важные задания по разработке существенных финансовых
                        и административных условий. Задача организации, в особенности же новая модель организационной
                        деятельности требуют определения и уточнения систем массового участия. Не следует,
                        однако забывать, что сложившаяся структура организации требуют определения и уточнения
                        существенных финансовых и административных условий. Повседневная практика показывает, что
                        дальнейшее развитие различных форм деятельности требуют определения и уточнения форм развития.
                    </p>
                    <div className={styles.box}>
                        <img src={firstImage} className={styles.firstImage} alt="Товар магазина" />
                        <img src={secondImage} className={styles.secondImage} alt="Товар магазина" />
                        <img src={thirdImage} className={styles.thirdImage} alt="Товар магазина" />
                    </div>
                </div>
            </section>
            <Contacts />
        </main>
    )
};

export default AboutUs;