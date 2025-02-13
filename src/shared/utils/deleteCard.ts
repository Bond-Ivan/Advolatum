import CardBasket from "../types/basketCard";

const deleteCard = (id: number) => {
    const actualBasket = JSON.parse(localStorage.getItem('basket') || '[]');
    const updatedBasket = actualBasket.filter((item: CardBasket) => item.id !== id);

    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    window.dispatchEvent(new Event('storage'));
};

export default deleteCard;