import { ReactElement } from "react";
import firstImage from "../../../../assets/collection-image1.jpg";
import thirdImage from "../../../../assets/collection-image2.jpg";
import secondImage from "../../../../assets/collection-image3.jpg";
import collectionLogo from "../../../../assets/collection-logo.png";
import styles from "./CollectionInfo.module.css";
import { Link } from "react-router-dom";

function CollectionInfo(): ReactElement {
    return (
        <section className={styles.collectionInfo}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper2}>
                        <div className={styles.wrapper3}>
                            <div>
                                <img src={firstImage} className={styles.firstImage} alt="Товар коллекции" />
                                <div className={styles.inner}>
                                    <img src={thirdImage} className={styles.thirdImage} alt="Товар коллекции" />
                                    <div className={styles.box}>
                                        <p className={styles.text}>классическая коллекция</p>
                                        <img src={collectionLogo} alt="Логотип коллекции" className={styles.logo} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={secondImage} className={styles.secondImage} alt="Товар коллекции" />
                            </div>
                        </div>
                        <p className={styles.description}>
                            коллекция была создана для людей учитывающие детали
                            в своей повседневной жизни
                            В перфомансе стиля мы хотели приподнести легкость и
                            комфорт, к которому стремиться каждый
                        </p>
                    </div>
                    <Link to="/catalog" className={styles.link}>
                        <svg className={styles.svg} width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.68541 0.0970447C-0.335701 0.522591 -0.535634 1.78524 1.06716 4.00112C1.25026 4.25426 1.44287 4.49855 1.49518 4.54386C1.64099 4.67029 2.28864 5.14686 2.92192 5.59383C3.4929 5.99681 5.43763 7.00042 5.6583 7.00603C5.72269 7.00765 5.9894 7.11437 6.25096 7.24318C6.51253 7.37198 6.78428 7.47775 6.85485 7.47823C6.92543 7.4787 7.11804 7.5382 7.28287 7.61056C7.44771 7.68281 7.87364 7.83314 8.22927 7.94461C9.92728 8.4766 9.62814 9.48839 7.88629 9.10492C7.66695 9.05656 7.10225 8.94593 6.63143 8.85892C6.1606 8.77191 5.68978 8.66271 5.58516 8.61616C4.40391 8.09037 2.01832 7.49308 2.01832 7.72308C2.01832 8.06628 3.2338 9.86529 3.79042 10.3459C4.44272 10.9091 6.17478 11.9535 6.45651 11.9535C6.52376 11.9535 6.76183 12.0343 6.98554 12.1332C7.65792 12.4301 8.32325 12.6209 8.68431 12.6204C9.87344 12.6188 10.5018 13.0014 10.162 13.5204C9.97056 13.8129 7.81295 13.8852 6.91031 13.6294C5.783 13.3099 5.18282 13.3554 5.42774 13.7418C5.52457 13.8944 7.64079 15.2831 7.77871 15.2846C7.83426 15.2851 8.06967 15.3794 8.30185 15.494C9.21572 15.9455 12.6754 16.1602 14.2407 15.8627C16.0613 15.5167 16.1739 15.4915 16.3682 15.3875C16.4729 15.3314 16.6675 15.2855 16.8005 15.2855C18.0473 15.2855 20.5256 13.9208 21.9724 12.4376C23.2176 11.1611 23.2649 10.9478 22.4701 10.1923C22.3048 10.0352 22.0989 9.75676 22.0123 9.5735C21.8049 9.13396 19.1902 6.51946 18.2831 5.84449C17.3766 5.1699 15.7938 4.09908 15.3459 3.85718C15.1565 3.75484 14.7448 3.5215 14.4309 3.33853C14.117 3.15546 13.6248 2.89594 13.3371 2.7618C13.0494 2.62757 12.7283 2.47706 12.6237 2.42736C12.2808 2.26428 10.8295 1.75706 10.1983 1.5797C9.85823 1.48412 9.47301 1.36255 9.34222 1.30952C9.21144 1.25649 8.86902 1.1493 8.5813 1.07123C7.21896 0.701854 6.89604 0.611889 6.62467 0.526304C6.46402 0.475658 6.21511 0.434245 6.07148 0.434245C5.92795 0.434245 5.71699 0.382932 5.60266 0.32029C5.07572 0.0310709 2.65398 -0.106875 1.68541 0.0970447Z" />
                        </svg>
                        Смотреть
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CollectionInfo;