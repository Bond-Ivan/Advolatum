import { ReactElement, useEffect, useRef } from "react";
import styles from "./ProductCard.module.css";
import Card from "../../shared/types/card";
import addCard from "../../shared/utils/addCard";

function ProductCard({ image, title, price, type }: Card): ReactElement {
    const cardRef = useRef<HTMLLIElement>(null);
    const innerCardRef = useRef<HTMLDivElement>(null);
    const glareRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const innerCard = innerCardRef.current;

        const calculateAngle = (e: MouseEvent) => {
            if (card && innerCard) {
                const x = e.clientX - card.getBoundingClientRect().left;
                const y = e.clientY - card.getBoundingClientRect().top;
                const halfWidth = card.clientWidth / 2;
                const halfHeight = card.clientHeight / 2;

                const calcAngleX = (y - halfHeight) / 22; 
                const calcAngleY = (x - halfWidth) / 22;

                innerCard.style.transform = `rotateY(${calcAngleY}deg) rotateX(${-calcAngleX}deg) scale(1.05)`;
                glareRef.current!.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.103), transparent)`;
            }
        };

        const handleMouseLeave = () => {
            if (innerCard) {
                innerCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
                glareRef.current!.style.background = `none`;
            }
        };

        if (card) {
            card.addEventListener('mousemove', calculateAngle);
            card.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (card) {
                card.removeEventListener('mousemove', calculateAngle);
                card.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <li ref={cardRef} className={type !== "catalogCard" ? styles.actualItem : styles.catalogItem}>
            <div className={styles.innerCard} ref={innerCardRef}>
                <div className={styles.glare} ref={glareRef}></div>
                <img src={image} alt="Товар" className={styles.image} />
                <h3 className={type !== "catalogCard" ? styles.actualTitle : styles.catalogTitle}>{title}</h3>
                <div className={styles.box}>
                    <span className={type !== "catalogCard" ? styles.actualPrice : styles.catalogPrice}>{price} ₽</span>
                    <button className={type !== "catalogCard" ? styles.actualButton : styles.catalogButton} onClick={() => {
                        addCard({ image, title, price })
                    }}>В корзину</button>
                </div>
            </div>
        </li>
    )
}

export default ProductCard;