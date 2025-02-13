import { ReactElement, useState } from "react";
import styles from "./BasketList.module.css";
import BasketCard from "./BasketCard/BasketCard";
import CardBasket from "../../../../shared/types/basketCard";
import deleteCard from "../../../../shared/utils/deleteCard";
import ModalDelete from "../../../Modals/ModalDelete";

function BasketList(): ReactElement {
    const basketList = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')!) : [];
    const [basket, setBasket] = useState<CardBasket[]>(basketList);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [cardId, setCardId] = useState<number | null>(null);
    const [cardTitle, setCardTitle] = useState<string | null>(null);

    const closeDeleteModal = () => {
        setModalOpen(false);
        setCardId(null);
    };

    const handleDelete = (id: number, title: string) => {
        setCardId(id);
        setCardTitle(title);
        setModalOpen(true);
    };

    const confirmDeleteModal = () => {
        if (!cardId) return;

        deleteCard(cardId);
        setBasket(basket.filter((item) => item.id !== cardId));
        setModalOpen(false);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {basket.map(({ id, image, title, price, count }: CardBasket, index: number) => {
                        return (
                            <BasketCard key={index} id={id} image={image} title={title} price={price} count={count} handleDelete={handleDelete} />
                        )
                    })}
                </ul>
            </div>
            {isModalOpen && (
                <ModalDelete onClose={closeDeleteModal} onConfirm={confirmDeleteModal} cardTitle={cardTitle}/>
            )}
        </>
    )
}

export default BasketList;