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
    const [cardToDelete, setCardToDelete] = useState<string | null>(null);

    const closeDeleteModal = () => {
        setModalOpen(false);
        setCardToDelete(null);
    };

    const handleDelete = (title: string) => {
        setCardToDelete(title);
        setModalOpen(true);
    };

    const confirmDeleteModal = () => {
        if (!cardToDelete) return;

        deleteCard(cardToDelete);
        setBasket(basket.filter((item) => item.title !== cardToDelete));
        setModalOpen(false);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {basket.map(({ image, title, price, count }: CardBasket, index: number) => {
                        return (
                            <BasketCard key={index} image={image} title={title} price={price} count={count} handleDelete={handleDelete} />
                        )
                    })}
                </ul>
            </div>
            {isModalOpen && (
                <ModalDelete onClose={closeDeleteModal} onConfirm={confirmDeleteModal} cardTitle={cardToDelete}/>
            )}
        </>
    )
}

export default BasketList;